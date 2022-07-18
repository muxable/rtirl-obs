var key;
var inclination = 0.0;
var wattage = 0;
var timeDelta = 0.0;
var target;
var gauge;
var powerLossPercentage = 3; //Not all of the power that you produce when cycling is transferred directly to the wheels. 3% default.
var gps = { old: { latitude: 0.0, longitude: 0.0, altitude: 0.0, speed: 0.0, time: 0, wattage: 0 }, new: { latitude: 0.0, longitude: 0.0, altitude: 0.0, speed: 0.0, time: 0, wattage: 0 } };
var timer;

// Get user options
var params = new URLSearchParams(window.location.search);
key = params.get('key') || '';
var mRider = params.get('ridermass') || 80;
var mBike = params.get('bikemass') || 11;
var maxPower = params.get('maxpower') || 400;

// Canvas Options

var opts = {
    angle: 0.07, // The span of the gauge arc
    lineWidth: 0.53, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.68, // // Relative to gauge radius
        strokeWidth: 0.051, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: true,     // If false, max value increases automatically if value > maxValue
    limitMin: true,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    percentColors: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],
};

RealtimeIRL.forPullKey(key).addListener(
    function (data) { 
        if (gps.new.latitude == 0){ //only run once
            target = document.getElementById('foo');
            gauge = new Gauge(target).setOptions(opts);
            gauge.maxValue = 400;
            gauge.animationSpeed = 100;
        }
        gps.new.latitude = data.location.latitude;
        gps.new.longitude = data.location.longitude;
        gps.new.altitude = data.altitude.EGM96;
        gps.new.speed = data.speed;
        gps.new.time = data.updatedAt;

        clearTimeout(timer);

        // We have new gps points. Let's calculate the delta distance using previously saved gps points (IN METERS)
        delta = distanceInKmBetweenEarthCoordinates(gps.new.latitude, gps.new.longitude, gps.old.latitude, gps.old.longitude) * 1000;

        timeDelta = timeDifference(gps.new.time, gps.old.time);

        // Now calculate the slope percentage, based on altitude change and distance travelled
        inclination = ((gps.new.altitude - gps.old.altitude) / delta * 100);

        // "Fix" errors
        if ((inclination > 40) || (inclination < -40)){
            inclination = 0.0;
        }
        
        // Power = Force * distance / time
        gps.new.wattage = (forceOfGravity(inclination, mRider, mBike) + forceOfRollingResistance(inclination, mRider, mBike) + forceOfDrag(delta/timeDelta)) * (delta / timeDelta) / (1 - powerLossPercentage/100); //P=(Fg+Fr+Fa)×v/(1−loss)

        // Ease-in wattage, no sudden jumps
        wattage = (gps.new.wattage + gps.old.wattage) / 2; 

        gps.old.wattage = gps.new.wattage;

         //testing purposes only
        /*
        document.getElementById("text2").innerText = forceOfGravity(inclination, mRider, mBike);
        document.getElementById("text3").innerText = forceOfRollingResistance(inclination, mRider, mBike);
        document.getElementById("text4").innerText = forceOfDrag(delta/timeDelta); //gps.new.speed ?
        document.getElementById("text5").innerText = timeDelta + " sec";
        document.getElementById("text6").innerText = delta + " meters";
        */

        if (wattage > 0 && wattage <= maxPower) {
            document.getElementById("text").innerText = wattage.toFixed(0) + "W";
            gauge.set(wattage.toFixed(0));
        }
        else if (wattage > maxPower){
            document.getElementById("text").innerText = maxPower + "W+";
            gauge.set(maxPower);
        }
        else {
            document.getElementById("text").innerText = 0 + "W";
            gauge.set(0);
        }

        // Shifting new points to old for next update
        gps.old.latitude = gps.new.latitude;
        gps.old.longitude = gps.new.longitude;
        gps.old.altitude = gps.new.altitude;
        gps.old.speed = gps.new.speed;
        gps.old.time = gps.new.time;

        timer = setTimeout(() => {
            document.getElementById("text").innerText = 0 + "W";
            gauge.set(0);
        }, 10000);
    }
);

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}
 
function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;
 
    var dLat = degreesToRadians(lat2 - lat1);
    var dLon = degreesToRadians(lon2 - lon1);
 
    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);
 
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
       Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
}

function forceOfGravity(slope, massRider, massBike){
    var g = 9.81;
    return (g * Math.sin(Math.atan(slope/100)) * (massRider + massBike));
}

function forceOfRollingResistance(slope, massRider, massBike){
    var g = 9.81;
    var resistance = 0.006; //default tarmac resistance
    return (g * Math.cos(Math.atan(slope/100)) * (massRider + massBike) * resistance);
}

function forceOfDrag(speed){
    return 0.5 * 0.33 * speed * speed * 1.19; //Fa=0.5×Cd×A×ρ×(v+w). Not accounting for wind (for now). Air density = 1.19, aprox. Lower if higher altitudes
    2
}

function timeDifference(date1, date2) {
    var difference = date1 - date2;
    return difference/1000; //in seconds, float
}