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
  return forPullKey(pullKey).addLocationListener(callback);
}

export function addSpeedListener(
  pullKey: string,
  callback: (speed: MetersPerSecond) => void
) {
  return forPullKey(pullKey).addSpeedListener(callback);
}

export function addHeadingListener(
  pullKey: string,
  callback: (heading: Degrees) => void
) {
  return forPullKey(pullKey).addHeadingListener(callback);
}

export function addAltitudeListener(
  pullKey: string,
  callback: (altitude: Meters) => void
) {
  return forPullKey(pullKey).addAltitudeListener(callback);
}

export function addSessionIdListener(
  pullKey: string,
  callback: (sessionId: UUID) => void
) {
  return forPullKey(pullKey).addSessionIdListener(callback);
}

/** Creates a listener source for a streamer's private data with a pull key. */
export function forPullKey(pullKey: string) {
  const ref = getDb().ref().child("pullables").child(pullKey);
  return {
    addLocationListener(callback: (location: Location) => void) {
      return ref.child("location").on("value", (snapshot) => {
        callback(snapshot.val());
      });
    },
    addSpeedListener(callback: (speed: MetersPerSecond) => void) {
      return ref.child("speed").on("value", (snapshot) => {
        callback(snapshot.val());
      });
    },
    addHeadingListener(callback: (heading: Degrees) => void) {
      return ref.child("heading").on("value", (snapshot) => {
        callback(snapshot.val());
      });
    },
    addAltitudeListener(callback: (altitude: Meters) => void) {
      return ref.child("altitude").on("value", (snapshot) => {
        callback(snapshot.val());
      });
    },
    /**
     * This listener detects changes in the active session id. When a streamer
     * goes online, a new session id is created and this listener is triggered.
     * null sessionId's indicate the streamer is offline. Note that it is
     * possible for two sequential non-null sessionIds to be sent.
     */
    addSessionIdListener(callback: (sessionId: UUID) => void) {
      return ref.child("sessionId").on("value", (snapshot) => {
        callback(snapshot.val());
      });
    },
  };
}

/** Creates a listener source for a streamer's public data. */
export function forStreamer(provider: "twitch", userId: string) {
  const ref = getDb().ref().child("streamers").child(`${provider}:${userId}`);
  return {
    addLocationListener(callback: (location: Location | null) => void) {
      return ref.child("location").on("value", (snapshot) => {
        callback(snapshot.val());
      });
    },
  };
}

let app: firebase.app.App | null = null;

function getDb() {
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
  return app.database();
}
