# RealtimeIRL Overlays

Overlays you can use on your stream! Add the URL as a Browser Source in OBS.

> A note on the map watermarks: it's tempting to crop them out with OBS, however most mapping providers require displaying attribution, even when used in non-interactive video. Verify you are meeting the relevant attribution requirements for your mapping provider. Muxable does not provide legal support if you are contacted regarding an attribution violation.

## Generic Mapbox

This style is the fastest to get started with. If you're looking for just an OBS map overlay, use this one! Please review the [Mapbox attribution requirements](https://docs.mapbox.com/help/getting-started/attribution/#static--print).

`https://overlays.rtirl.com/generic.html?key=<YOUR_PULL_KEY>`

### Optional URL parameters

- `&zoom=13` to tweak the zoom level.
- `&lang=en` to set the language of the map. [See this](https://github.com/mapbox/mapbox-gl-language/blob/master/index.js#L37) list for acceptable values, note that not all labels can be translated.
- `&fullscreen=1` to make the map fill the entire screen.

## Custom Mapbox Styles

If you have a Mapbox Studio style id, use this overlay. The style id looks like `adoucett/cjf5k84bp0p7t2rmiwvwikhyn`. Be sure to set your Mapbox access token in the url as well. Please review the [Mapbox attribution requirements](https://docs.mapbox.com/help/getting-started/attribution/#static--print).

`https://overlays.rtirl.com/mapbox.html?key=<YOUR_PULL_KEY>&access_token=<YOUR_MAPBOX_ACCESS_TOKEN>&style=<MAPBOX_STYLE_ID>`

### Optional URL parameters

- `&zoom=13` to tweak the zoom level.
- `&lang=en` to set the language of the map. [See this](https://github.com/mapbox/mapbox-gl-language/blob/master/index.js#L37) list for acceptable values, note that not all labels can be translated.
- `&fullscreen=1` to make the map fill the entire screen.

## Custom Google Maps or Snazzy Maps Styles

If you have a Google Maps style json, convert it to Base64 and URL encode it.

Then use the following link as your obs overlay source. Make sure to copy the entire thing, and be sure to set your Google Maps API key in the url as well.

`https://overlays.rtirl.com/googlemaps.html?key=<YOUR_PULL_KEY>&api_key=<YOUR_GOOGLE_MAPS_API_KEY>&style=<BASE64_ENCODED_JSON>`

### Optional URL parameters

- `&zoom=13` to tweak the zoom level.
- `&fullscreen=1` to make the map fill the entire screen.

## Leaflet Maps

If you would like to use [Leaflet](https://leafletjs.com/) to render your maps, try this overlay. Leaflet is more compatible with tools such as Prism Live. This overlay currently requires a Mapbox API key and Mapbox style id.

`https://overlays.rtirl.com/leaflet.html?key=<YOUR_PULL_KEY>&access_token=<YOUR_MAPBOX_ACCESS_TOKEN>&style=<MAPBOX_STYLE_ID>`

### Optional URL parameters

- `&zoom=13` to tweak the zoom level.
- `&fullscreen=1` to make the map fill the entire screen.

## Current Neighborhood/City

This overlay renders your current neighborhood as text. For example, "Williamsburg, New York City". If a neighborhood can't be found, just the city is rendered. Be aware that your exact location is still visible on rtirl.com. Using just this overlay does not prevent viewers from knowing your exact location.

`https://overlays.rtirl.com/neighborhood.html?key=<YOUR_PULL_KEY>`

### Optional URL parameters

- `&lang=en` to set the language of the overlay. See the [coverage table](https://docs.mapbox.com/api/search/geocoding/#language-coverage) for acceptable values.
- `&format=%24%7Bdata.neighborhood%20%3F%20data.neighborhood.text%20%2B%20%27%2C%20%27%20%3A%20%27%27%7D%24%7Bdata.place%3F.text%7D` to configure the format string. The format string is a url-encoded Javascript template literal with variables under data. See [the Mapbox](https://docs.mapbox.com/api/search/geocoding/#data-types) documentation for various objects. For examples, try: `&format=Country%3A%20%24%7Bdata.country.text%7D`

## Clock

This overlay renders the local time based on your location.

`https://overlays.rtirl.com/datetime/luxon.html?key=<YOUR_PULL_KEY>`

### Optional URL parameters

- `&lang=en` to set the language of the overlay. See [the Luxon documentation](https://moment.github.io/luxon/#/intl) for more information.
- `&format=tt` to set the rendered text. See [the Luxon documentation](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for valid tokens.

## Temperature

This renders the temperature at your location.

`https://overlays.rtirl.com/weather/temperature/F.html?key=<YOUR_PULL_KEY>`

`https://overlays.rtirl.com/weather/temperature/C.html?key=<YOUR_PULL_KEY>`

`https://overlays.rtirl.com/weather/feels_like/F.html?key=<YOUR_PULL_KEY>`

`https://overlays.rtirl.com/weather/feels_like/C.html?key=<YOUR_PULL_KEY>`

## [BETA] Speed

This overlay is in beta. The speed is not super accurate, especially at low speeds. If you have feedback, please join the [Muxable discord](https://discord.gg/UKHJMQs74u).

`https://overlays.rtirl.com/speed/kmh.html?key=<YOUR_PULL_KEY>` 

`https://overlays.rtirl.com/speed/mph.html?key=<YOUR_PULL_KEY>`

## [BETA] Heading

This overlay is in beta. The heading is not super accurate and relies on your phone's orientation, which may not always be correct. If you have feedback, please join the [Muxable discord](https://discord.gg/UKHJMQs74u).

`https://overlays.rtirl.com/heading/deg.html?key=<YOUR_PULL_KEY>` 

`https://overlays.rtirl.com/heading/nsew.html?key=<YOUR_PULL_KEY>`

### Optional URL parameters

- `&lang=en` to set the language of the overlay. See [the code](https://github.com/muxfd/rtirl-obs/blob/main/public/heading/nsew.html#L7) for acceptable values or to add your own language translation.

## [BETA] Altitude

This overlay is in beta. This renders the reported altitude above sea level using EGM96. If you have feedback, please join the [Muxable discord](https://discord.gg/UKHJMQs74u).

`https://overlays.rtirl.com/altitude/feet.html?key=<YOUR_PULL_KEY>` 

`https://overlays.rtirl.com/altitude/meters.html?key=<YOUR_PULL_KEY>`

## [BETA] Total Distance

This overlay is in beta. It shows the total distance traveled since the RealtimeIRL and stream started. Because of the GPS drift it may still accumulate tiny distances when you are stationary and this will result showing a slightly higher total distance. If you have feedback, please join the [Muxable discord](https://discord.gg/UKHJMQs74u).

`https://overlays.rtirl.com/distance/km.html?key=<YOUR_PULL_KEY>` 

`https://overlays.rtirl.com/distance/miles.html?key=<YOUR_PULL_KEY>`

## StreamElements

If you would like to display RealtimeIRL data using StreamElements overlays, you will need to add a Custom widget and then add the iFrame to the HTML section. (Settings > Open Editor)

`<iframe height="100%" width="100%" frameborder="0" src="https://overlays.rtirl.com/compat.html?key=<YOUR_PULL_KEY>&access_token=<YOUR_MAPBOX_ACCESS_TOKEN>&style=<MAPBOX_STYLE_ID>"> </iframe>`
