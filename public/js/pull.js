function loadScript(url, callback) {
  var head = document.head;
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  script.onreadystatechange = callback;
  script.onload = callback;
  head.appendChild(script);
}

loadScript("/__/firebase/8.2.9/firebase-app.js", function () {
  loadScript("/__/firebase/8.2.9/firebase-firestore.js", function () {
    loadScript("/__/firebase/init.js", function () {
      firebase
        .firestore()
        .collection("pullables")
        .doc(new URLSearchParams(window.location.search).get("key"))
        .onSnapshot(function (doc) {
          onData(doc.data());
        });
    });
  });
});
