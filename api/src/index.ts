import firebase from "firebase/app";
import "firebase/database";

type MetersPerSecond = number;
type Degrees = number;
type Meters = number;
type Location = { latitude: Degrees; longitude: Degrees };
type UUID = string | null;

export function addLocationListener(
  pullKey: string,
  callback: (location: Location) => void
) {
  return getRef(pullKey, "location").on("value", (snapshot) => {
    callback(snapshot.val());
  });
}

export function addSpeedListener(
  pullKey: string,
  callback: (speed: MetersPerSecond) => void
) {
  return getRef(pullKey, "speed").on("value", (snapshot) => {
    callback(snapshot.val());
  });
}

export function addHeadingListener(
  pullKey: string,
  callback: (heading: Degrees) => void
) {
  return getRef(pullKey, "heading").on("value", (snapshot) => {
    callback(snapshot.val());
  });
}

export function addAltitudeListener(
  pullKey: string,
  callback: (altitude: Meters) => void
) {
  return getRef(pullKey, "altitude").on("value", (snapshot) => {
    callback(snapshot.val());
  });
}

/**
 * This listener detects changes in the active session id. When a streamer
 * goes online, a new session id is created and this listener is triggered.
 * null sessionId's indicate the streamer is offline. Note that it is
 * possible for two sequential non-null sessionIds to be sent.
 * @param pullKey
 * @param callback
 * @returns
 */
export function addSessionIdListener(
  pullKey: string,
  callback: (sessionId: UUID) => void
) {
  return getRef(pullKey, "sessionId").on("value", (snapshot) => {
    callback(snapshot.val());
  });
}

let app: firebase.app.App | null = null;

function getRef(
  key: string,
  type: "location" | "speed" | "heading" | "altitude" | "sessionId"
) {
  if (!app) {
    app = firebase.initializeApp(
      {
        apiKey: "AIzaSyC4L8ICZbJDufxe8bimRdB5cAulPCaYVQQ",
        databaseURL: "https://rtirl-a1d7f-default-rtdb.firebaseio.com",
        projectId: "rtirl-a1d7f",
        appId: "1:684852107701:web:d77a8ed0ee5095279a61fc",
      },
      "rtirl-api"
    );
  }
  return app.database().ref().child("pullables").child(key).child(type);
}
