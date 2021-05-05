function loadScript(url, callback) {
  var head = document.head;
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  script.onreadystatechange = callback;
  script.onload = callback;
  head.appendChild(script);
}

function addLocationListener(callback) {
  return addListener("location", callback);
}

function addSpeedListener(callback) {
  return addListener("speed", callback);
}

function addHeadingListener(callback) {
  return addListener("heading", callback);
}

function addAltitudeListener(callback) {
  return addListener("altitude", callback);
}

function addListener(type, callback) {
  var key = new URLSearchParams(window.location.search).get("key");
  return firebase
    .database()
    .ref()
    .child("pullables")
    .child(key)
    .child(type)
    .on("value", function (snapshot) {
      callback(snapshot.val());
    });
}

loadScript("/__/firebase/8.2.9/firebase-app.js", function () {
  loadScript("/__/firebase/8.2.9/firebase-database.js", function () {
    loadScript("/__/firebase/init.js", function () {
      onReady();
    });
  });
});