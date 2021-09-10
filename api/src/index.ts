import { FirebaseApp, initializeApp } from "firebase/app";
import { child, getDatabase, onValue, ref } from "firebase/database";

type MetersPerSecond = number;
type Degrees = number;
type Meters = number;
type BeatsPerMinute = number;
type Location = { latitude: Degrees; longitude: Degrees };
type UUID = string;

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
  callback: (sessionId: UUID | null) => void
) {
  return forPullKey(pullKey).addSessionIdListener(callback);
}

/** Creates a listener source for a streamer's private data with a pull key. */
export function forPullKey(pullKey: string) {
  const reference = child(ref(getDb(), "pullables"), pullKey);
  return {
    addLocationListener(callback: (location: Location) => void) {
      return onValue(child(reference, "location"), (snapshot) => {
        callback(snapshot.val());
      });
    },
    addSpeedListener(callback: (speed: MetersPerSecond) => void) {
      return onValue(child(reference, "speed"), (snapshot) => {
        callback(snapshot.val());
      });
    },
    addHeadingListener(callback: (heading: Degrees) => void) {
      return onValue(child(reference, "heading"), (snapshot) => {
        callback(snapshot.val());
      });
    },
    addAltitudeListener(callback: (altitude: Meters) => void) {
      return onValue(child(reference, "altitude"), (snapshot) => {
        callback(snapshot.val());
      });
    },
    addHeartRateListener(callback: (altitude: BeatsPerMinute) => void) {
      return onValue(child(reference, "heart_rate"), (snapshot) => {
        callback(snapshot.val());
      });
    },
    /**
     * This listener detects changes in the active session id. When a streamer
     * goes online, a new session id is created and this listener is triggered.
     * null sessionId's indicate the streamer is offline. Note that it is
     * possible for two sequential non-null sessionIds to be sent.
     */
    addSessionIdListener(callback: (sessionId: UUID | null) => void) {
      return onValue(child(reference, "sessionId"), (snapshot) => {
        callback(snapshot.val());
      });
    },
  };
}

/** Creates a listener source for a streamer's public data. */
export function forStreamer(provider: "twitch", userId: string) {
  const reference = child(ref(getDb(), "streamers"), `${provider}:${userId}`);
  return {
    /** If the public location is hidden (eg streamer is offline), null is passed. */
    addLocationListener(callback: (location: Location | null) => void) {
      return onValue(child(reference, "location"), (snapshot) => {
        callback(snapshot.val());
      });
    },
  };
}

let app: FirebaseApp | null = null;

function getDb() {
  if (!app) {
    app = initializeApp(
      {
        apiKey: "AIzaSyC4L8ICZbJDufxe8bimRdB5cAulPCaYVQQ",
        databaseURL: "https://rtirl-a1d7f-default-rtdb.firebaseio.com",
        projectId: "rtirl-a1d7f",
        appId: "1:684852107701:web:d77a8ed0ee5095279a61fc",
      },
      "rtirl-api"
    );
  }
  return getDatabase(app);
}
