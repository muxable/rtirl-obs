import * as React from "react";
import MapGL from "react-map-gl";
import { Box, Typography} from '@mui/material';
import 'mapbox-gl/dist/mapbox-gl.css';



export const MapboxMapContainer = ({mapboxToken, mapStyle, viewState, setViewState}) => {
  mapboxToken="qwer"
  
  return (
		<div
      style={{height: "524px", width: "80vw", marginTop: "16px"}}
    >
    {
			mapboxToken !== undefined && mapboxToken !== null && mapboxToken !== "" &&
      <>
      	<MapGL
        {...viewState}
        mapStyle={mapStyle && mapStyle.toJS()}
        styleDiffing
        width="100%"
        height="100%"
        onMove={evt => setViewState(evt.viewState)}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        />
      </>
		
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
		</div>
  );
}