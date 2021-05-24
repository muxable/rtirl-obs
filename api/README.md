# RealtimeIRL Client API

An API to access RealtimeIRL data.

## Installation

```bash
  npm install @rtirl/api
```

Alternatively, use it in the browser:

```html
<script src="https://unpkg.com/@rtirl/api@latest/lib/index.min.js"></script>
```

## Usage

```javascript
RealtimeIRL.forPullKey(YOUR_PULL_KEY).addLocationListener(function ({
  latitude,
  longitude,
}) {
  // do something with latitude/longitude
});
```

```javascript
// muxfd = 158394109
RealtimeIRL.forStreamer("twitch", "158394109").addLocationListener(function (
  location
) {
  // do something with location.latitude/location.longitude
});
```

See `src/index.ts` for all available functions and types.

## Contributing

Contributions are always welcome! The documentation is currently quite sparse. Please feel free to send pull requests to improve them.
