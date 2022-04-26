import * as React from "react";
import { useState } from "react";
import MapGL from "react-map-gl";
import { Box, Stack, Typography} from '@mui/material';
import { ExportPanel } from "./ExportPanel";

// const MAPBOX_TOKEN =
//   "pk.eyJ1Ijoia2V2bW8zMTQiLCJhIjoiY2t3bjR3cTloMDJ1ajJ1cW9obGh2ZmcybCJ9.uWdEuy9ilDupIiaOQIcMpQ";

export const MapboxMapContainer = ({mapboxToken}) => {

  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3,
    bearing: 0,
    pitch: 0,
  });

  return (
		<Stack>
    {
			mapboxToken !== undefined && mapboxToken !== null && mapboxToken !== "" &&
			      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={mapboxToken}
      >
      </MapGL>
		}
		{
			(mapboxToken === undefined || mapboxToken === null || mapboxToken === "") &&
			<Box style={{height: "512px",  backgroundColor: "gray", margin: "16px"}} borderRadius={4}
				width="80vw"
				display="flex" 
				justifyContent="center"
				alignItems="center">
				<Typography variant="h6" color="inherit" component="div">
					Please enter a valid API Key
				</Typography>
			</Box>
		}
			<ExportPanel></ExportPanel>
		</Stack>
  );
}