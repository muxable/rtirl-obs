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
  var key = new URLSearchParams(window.location.search).get("key");
  return firebase
    .database()
    .ref()
    .child("pullables")
    .child(key)
    .child("location")
    .doc(`${key}:location`)
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
