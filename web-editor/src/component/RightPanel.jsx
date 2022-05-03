import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
// import { ExportPanel } from './ExportPanel';
import { ConsolePanel } from './ConsolePanel';
import { MapboxMapContainer } from './MapboxMapContainer';
import { useEffect } from 'react';

export const mapboxMapStyleJsonCache = {};

export const RightPanel = ({lang, pullKey, apiKey, styleID, mapStyle, setMapStyle}) => {

	const [viewState, setViewState] = React.useState({
    longitude: -100,
    latitude: 40,
    zoom: 3,
  });


	useEffect(() => {
		console.log("new map style");
		const mapboxMapStyleJson = mapboxMapStyleJsonCache[styleID];
		if (mapboxMapStyleJson !== undefined && mapboxMapStyleJson !== null && mapboxMapStyleJson !== "") { 
			setMapStyle(mapboxMapStyleJsonCache[styleID || "mapbox/streets-v11"]);
		} else {
			fetch(`https://api.mapbox.com/styles/v1/${styleID}?access_token=pk.eyJ1Ijoia2V2bW8zMTQiLCJhIjoiY2oyMDFlMGpsMDN3bTJ4bjR1MzRrbDFleCJ9.7XEB3HHBGr-N6ataUZh_6g`)
      .then(res => res.json())
      .then(res => {
				mapboxMapStyleJsonCache[styleID] = res;
        setMapStyle(res);
      }).catch(err => {
				console.log(err);
				setMapStyle(mapboxMapStyleJsonCache["mapbox/streets-v11"]);
			})
		}
	}, [styleID, setMapStyle])


	return (
		<Stack
			style={{ margin: "4px" }}
			divider={<Divider orientation="vertical" flexItem />}
		>
			<MapboxMapContainer 
				viewState={viewState}
				setViewState={setViewState}
				mapStyle={mapStyle} 
			/>
			{
				`Longitude: ${viewState.longitude}, Latitude: ${viewState.latitude}, zoom: ${viewState.zoom}`
			}
			{/* <ExportPanel></ExportPanel> */}
			<ConsolePanel 
				lang={lang}
				zoom={viewState.zoom}
				styleID={styleID}
				pullKey={pullKey}
				apiKey={apiKey}
			></ConsolePanel>
		</Stack>
	)

}