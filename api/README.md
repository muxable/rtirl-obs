# RealtimeIRL Client API

![npm](https://img.shields.io/npm/v/@rtirl/api)
![npm](https://img.shields.io/npm/dw/@rtirl/api)

An API to access RealtimeIRL data.

## Installation

```bash
  npm install @rtirl/api
```

Alternatively, use it in the browser:

```html
<script src="https://cdn.jsdelivr.net/npm/@rtirl/api@latest/lib/index.min.js"></script>
```

## Usage

```javascript
import * as RealtimeIRL from '@rtirl/api';

RealtimeIRL.forPullKey(YOUR_PULL_KEY).addLocationListener(function ({
  latitude,
  longitude,
}) {
  // do something with latitude/longitude
});
```

```javascript
import * as RealtimeIRL from '@rtirl/api';

// muxfd = 158394109
RealtimeIRL.forStreamer("twitch", "158394109").addLocationListener(function (
  location
) {
  // do something with location.latitude/location.longitude
});
```

See `src/index.ts` for all available functions and types.

## Polling-based API

If you are interested in pulling the data in JSON format, the following endpoint is available:

```
GET https://rtirl.com/api/pull?key=<pull key>
```

The schema of the response depends on what fields have been pushed by the client. A sample output can be viewed [here](https://rtirl.com/api/pull?key=t0fucprufql69bcx).

```
{
   "accuracy":5.408999919891357,  // meters
   "altitude":{
      "EGM96":3.5973978207728656, // meters
      "WGS84":-29.197977916731165 // meters
   },
   "heading":206.37741088867188,  // degrees
   "location":{
      "latitude":40.7047389,      // degrees
      "longitude":-74.0171302     // degrees
   },
   "reportedAt":1629924573000,    // milliseconds since epoch
   "speed":0.6116824746131897,    // meters per second
   "updatedAt":1629924573283      // milliseconds since epoch
}
```

Note that the polling API may update less frequently than the push API (~once per five seconds). If you wish to have realtime updates delivered as fast as possible, please use the push API. This helps us save on server costs.

## Contributing

Contributions are always welcome! The documentation is currently quite sparse. Please feel free to send pull requests to improve them.
