import { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
// import { ExportPanel } from './ExportPanel';
import { ConsolePanel } from './ConsolePanel';
import { MapboxMapContainer } from './MapboxMapContainer';
import { GoogleMapContainer } from './GoogleMapContainer';


export const mapboxMapStyleJsonCache = {};

export const RightPanel = ({lang, pullKey, apiKey, styleID, mapStyle, setMapStyle, mapProvider, googleStyleJSON }) => {
	console.log("right panel render");
	const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 3,
  });

	const [googleMapViewState, setGoogleMapViewState] = useState({
		longitude: -100,
		latitude: 40,
		zoom: 3,
	})

	console.log(googleMapViewState);


	const [canPreview, setCanPreview] = useState(true);

	useEffect(() => {
		const mapboxMapStyleJson = mapboxMapStyleJsonCache[styleID];
		if (mapboxMapStyleJson !== undefined && mapboxMapStyleJson !== null && mapboxMapStyleJson !== "") { 
			setMapStyle(mapboxMapStyleJsonCache[styleID]);
		} else {
			fetch(`https://api.mapbox.com/styles/v1/${styleID}?access_token=${apiKey}`)
      .then(res => res.status === 200 ? res.json() : null)
      .then(res => {
				if (res !== null) {
					mapboxMapStyleJsonCache[styleID] = res;
					setMapStyle(res);
					setCanPreview(true);
				} else {
					setCanPreview(false);
				}
      }).catch(err => {
				console.log(err);
				setMapStyle(mapboxMapStyleJsonCache["mapbox/streets-v11"]);
			});
		}
	}, [styleID, apiKey, setMapStyle])


	return (
		<Stack
			style={{ margin: "4px" }}
			divider={<Divider orientation="vertical" flexItem />}
		>

			{
				mapProvider === "mapbox" ? 
					<MapboxMapContainer 
						canPreview={canPreview}
						viewState={viewState}
						setViewState={setViewState}
						mapStyle={mapStyle}
						apiKey={apiKey}
					/> :
					<GoogleMapContainer 
						apiKey={apiKey}
						mapStyle={googleStyleJSON}
					/>
			}

			{
				`Longitude: ${viewState.longitude}, Latitude: ${viewState.latitude}, zoom: ${viewState.zoom}`
			}
			{/* <ExportPanel></ExportPanel> */}
			<ConsolePanel
				canPreview={canPreview}
				lang={lang}
				zoom={viewState.zoom}
				styleID={styleID}
				pullKey={pullKey}
				apiKey={apiKey}
			></ConsolePanel>
		</Stack>
	)

}