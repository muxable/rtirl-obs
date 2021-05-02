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
RealtimeIRL.addLocationListener(
  YOUR_PULL_KEY,
  function ({latitude, longitude}) {
      // do something with latitude/longitude
  }
);
```

See `src/index.ts` for all available functions and types.

## Contributing

Contributions are always welcome! The documentation is currently quite sparse. Please feel free to send pull requests to improve them.
