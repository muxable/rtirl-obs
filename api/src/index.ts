import { getAnalytics, logEvent } from "firebase/analytics";
import { FirebaseApp, initializeApp } from "firebase/app";
import { child, getDatabase, onValue, ref } from "firebase/database";

type MetersPerSecond = number;
type Degrees = number;
type Meters = number;
type BeatsPerMinute = number;
type Steps = number;
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
  const db = getDatabase(getApp());
  const analytics = getAnalytics(getApp());
  const reference = child(ref(db, "pullables"), pullKey);
  return {
    addLocationListener(callback: (location: Location) => void) {
      logEvent(analytics, "listener", { type: "location", pullKey });
      return onValue(child(reference, "location"), (snapshot) => {
        callback(snapshot.val());
        logEvent(analytics, "data", { type: "sessionId", pullKey });
      });
    },
    addSpeedListener(callback: (speed: MetersPerSecond) => void) {
      logEvent(analytics, "listener", { type: "speed", pullKey });
      return onValue(child(reference, "speed"), (snapshot) => {
        callback(snapshot.val());
        logEvent(analytics, "data", { type: "sessionId", pullKey });
      });
    },
    addHeadingListener(callback: (heading: Degrees) => void) {
      logEvent(analytics, "listener", { type: "heading", pullKey });
      return onValue(child(reference, "heading"), (snapshot) => {
        callback(snapshot.val());
        logEvent(analytics, "data", { type: "sessionId", pullKey });
      });
    },
    addAltitudeListener(callback: (altitude: Meters) => void) {
      logEvent(analytics, "listener", { type: "altitude", pullKey });
      return onValue(child(reference, "altitude"), (snapshot) => {
        callback(snapshot.val());
        logEvent(analytics, "data", { type: "sessionId", pullKey });
      });
    },
    addHeartRateListener(callback: (altitude: BeatsPerMinute) => void) {
      logEvent(analytics, "listener", { type: "heart_rate", pullKey });
      return onValue(child(reference, "heart_rate"), (snapshot) => {
        callback(snapshot.val());
        logEvent(analytics, "data", { type: "sessionId", pullKey });
      });
    },
    /**
     * This listener reports the number of steps taken so far. Note that this
     * number does not reset when the streamer goes offline. It is up to the
     * client to reset the number when the streamer goes offline or online.
     * Instead, the number is reported as the total number of steps taken since
     * an arbitrary point in time, and guaranteed to be monotonically increasing
     * for a given session id.
     */
    addPedometerStepsListener(callback: (steps: Steps) => void) {
      logEvent(analytics, "listener", { type: "pedometer_steps", pullKey });
      return onValue(child(reference, "pedometer_steps"), (snapshot) => {
        callback(snapshot.val());
        logEvent(analytics, "data", { type: "sessionId", pullKey });
      });
    },
    /**
     * This listener is useful for accessing unstructured data associated with
     * the pull key. It includes the above fields as well as other fields such
     * as bluetooth heart rate or telemetry data.
     */
    addListener(callback: (data: any) => void) {
      logEvent(analytics, "listener", { type: "root", pullKey });
      return onValue(reference, (snapshot) => {
        callback(snapshot.val());
        logEvent(analytics, "data", { type: "root", pullKey });
      });
    },
    /**
     * This listener detects changes in the active session id. When a streamer
     * goes online, a new session id is created and this listener is triggered.
     * null sessionId's indicate the streamer is offline. Note that it is
     * possible for two sequential non-null sessionIds to be sent.
     */
    addSessionIdListener(callback: (sessionId: UUID | null) => void) {
      logEvent(analytics, "listener", { type: "sessionId", pullKey });
      return onValue(child(reference, "sessionId"), (snapshot) => {
        callback(snapshot.val());
        logEvent(analytics, "data", { type: "sessionId", pullKey });
      });
    },
  };
}

/** Creates a listener source for a streamer's public data. */
export function forStreamer(provider: "twitch", userId: string) {
  const db = getDatabase(getApp());
  const analytics = getAnalytics(getApp());
  const reference = child(ref(db, "streamers"), `${provider}:${userId}`);
  return {
    /** If the public location is hidden (eg streamer is offline), null is passed. */
    addLocationListener(callback: (location: Location | null) => void) {
      logEvent(analytics, "listener", { type: "location", provider, userId });
      return onValue(child(reference, "location"), (snapshot) => {
        callback(snapshot.val());
        logEvent(analytics, "data", { type: "location", provider, userId });
      });
    },
  };
}

let app: FirebaseApp | null = null;

function getApp() {
  if (!app) {
    app = initializeApp(
      {
        apiKey: "AIzaSyC4L8ICZbJDufxe8bimRdB5cAulPCaYVQQ",
        databaseURL: "https://rtirl-a1d7f-default-rtdb.firebaseio.com",
        projectId: "rtirl-a1d7f",
        appId: "1:684852107701:web:d77a8ed0ee5095279a61fc",
        measurementId: "G-TR97D81LT3",
      },
      "rtirl-api"
    );
  }
  return app;
}
