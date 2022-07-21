var key;
var inclination = 0.0;
var wattage = 0;
var mRider = 80;
var mBike = 11;
var timeDelta = 0.0;
var gps = { old: { latitude: 0.0, longitude: 0.0, altitude: 0.0, speed: 0.0, time: 0, wattage: 0 }, new: { latitude: 0.0, longitude: 0.0, altitude: 0.0, speed: 0.0, time: 0, wattage: 0 } };
const unit = "W";

// Get user options
var params = new URLSearchParams(window.location.search);
key = params.get('key') || '';

RealtimeIRL.forPullKey(key).addListener(
    function (data) { 
        gps.new.latitude = data.location.latitude;
        gps.new.longitude = data.location.longitude;
        gps.new.altitude = data.altitude.EGM96;
        gps.new.speed = data.speed;
        gps.new.time = data.updatedAt;

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
        gps.new.wattage = (forceOfGravity(inclination, mRider, mBike) + forceOfRollingResistance(inclination, mRider, mBike) + forceOfDrag(delta/timeDelta)) * delta / timeDelta;

        // Ease-in wattage, no sudden jumps
        wattage = (gps.new.wattage + gps.old.wattage) / 2; 

        gps.old.wattage = gps.new.wattage;


        if (wattage > 0) {
            document.getElementById("text").innerText = wattage.toFixed(0) + unit;
        }
        else {
            document.getElementById("text").innerText = 0 + unit;
        }


        // Shifting new points to old for next update
        gps.old.latitude = gps.new.latitude;
        gps.old.longitude = gps.new.longitude;
        gps.old.altitude = gps.new.altitude;
        gps.old.speed = gps.new.speed;
        gps.old.time = gps.new.time;
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
    return 0.5 * 0.33 * speed * speed * 1.15;
}

function timeDifference(date1, date2) {
    var difference = date1 - date2;
    return difference/1000; 
}
