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
    .firestore()
    .collection("pullables")
    .doc(`${key}:location`)
    .onSnapshot(function (doc) {
      callback(doc.data());
    });
}

loadScript("/__/firebase/8.2.9/firebase-app.js", function () {
  loadScript("/__/firebase/8.2.9/firebase-firestore.js", function () {
    loadScript("/__/firebase/init.js", function () {
      onReady();
    });
  });
});
