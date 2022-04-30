import * as React from "react";
import MapGL from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';



export const MapboxMapContainer = ({mapStyle, viewState, setViewState}) => {
  
  return (
		<div
      style={{height: "524px", width: "80vw", marginTop: "16px"}}
    >
      <MapGL
        {...viewState}
        mapStyle={mapStyle && mapStyle.toJS()}
        styleDiffing
        width="100%"
        height="100%"
        onMove={evt => setViewState(evt.viewState)}
        mapboxAccessToken="pk.eyJ1Ijoia2V2bW8zMTQiLCJhIjoiY2oyMDFlMGpsMDN3bTJ4bjR1MzRrbDFleCJ9.7XEB3HHBGr-N6ataUZh_6g"
      />
		</div>
  );
}