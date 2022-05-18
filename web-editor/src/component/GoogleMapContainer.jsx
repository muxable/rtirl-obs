import * as React from "react";
import { GoogleMap, useJsApiLoader, } from '@react-google-maps/api';
import { useState, useCallback, useRef, useEffect } from 'react';
        

const containerStyle = {
  width: "80vw",
  height: '524px',
  marginTop: "16px"
};




export const GoogleMapContainer = ({ mapStyle, apiKey }) => {
  
  mapStyle = JSON.parse(mapStyle) ?? {};

  const center = {
    lat: 40,
    lng: -100
  }
  
  
  const { isLoaded, loadError } = useJsApiLoader({
    id: `google-map-script`,
    googleMapsApiKey: apiKey,
  })

  console.log(`google map api loaded: ${isLoaded}`);

  const [map, setMap] = useState(null)

  const onLoad = useCallback((map) => {
    setMap(map)
  }, [])

  const onUnmount = useCallback((map) => {
    setMap(null)
  }, [])  

  const onZoomChanged = () => {
    // if (map !== undefined && map !== null) {
    //   console.log(`zoom changed: ${map['zoom']}`);
    //   setGoogleMapViewState({ latitude: map['center']['lat'], longitude: map['center']['lng'], zoom: map['zoom']})
    // }
  }

  const onCenterChanged = () => {
    // if (map !== undefined && map !== null) {
    //   console.log(`center changed: ${map['center']}`);
    //   setGoogleMapViewState({ latitude: map['center']['lat'], longitude: map['center']['lng'], zoom: map['zoom']})
    // }
  }

  const onMapTypeIdChanged = () => {
    console.log("map type changed");
  }
  
  // if (loadError === undefined) {
  //   return <div>Map cannot be displayed: {loadError.message}</div>
  // }

  return isLoaded ? (
      <GoogleMap
        options={{
          styles: mapStyle,
        }}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onZoomChanged={onZoomChanged}
        onCenterChanged={onCenterChanged}
        onMapTypeIdChanged={onMapTypeIdChanged}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}