import * as React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useState, useCallback } from 'react';


const containerStyle = {
  width: "80vw",
  height: '524px',
  marginTop: "16px"
};

const center = {
  lat: -3.745,
  lng: -38.523
};


export const GoogleMapContainer = () => {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback((map) => {
    setMap(null)
  }, [])  

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}