var key;
var inclination = 0.0;
var gps = { old: { latitude: 0.0, longitude: 0.0, altitude: 0.0 }, new: { latitude: 0.0, longitude: 0.0, altitude: 0.0 } };

// Get user options
var params = new URLSearchParams(window.location.search);
key = params.get('key') || '';

RealtimeIRL.forPullKey(key).addListener(
    function (data) { 
        gps.new.latitude = data.location.latitude;
        gps.new.longitude = data.location.longitude;
        gps.new.altitude = data.altitude.EGM96;

        // We have new gps points. Let's calculate the delta distance using previously saved gps points (IN METERS)
        delta = distanceInKmBetweenEarthCoordinates(gps.new.latitude, gps.new.longitude, gps.old.latitude, gps.old.longitude) * 1000;

        // Now calculate the slope percentage, based on altitude change and distance travelled
        inclination = ((gps.new.altitude - gps.old.altitude) / delta * 100);

        // "Fix" errors
        if ((inclination > 40) || (inclination < -40)){
            inclination = 0.0;
        }

        document.getElementById("text").innerText = inclination.toFixed(1) + unit;

        // Shifting new points to old for next update
        gps.old.latitude = gps.new.latitude;
        gps.old.longitude = gps.new.longitude;
        gps.old.altitude = gps.new.altitude;
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