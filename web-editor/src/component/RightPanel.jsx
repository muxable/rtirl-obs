import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { ExportPanel } from './ExportPanel';
import { ConsolePanel } from './ConsolePanel';
import { MapboxMapContainer } from './MapboxMapContainer';


export const RightPanel = ({zoom, pullKey, apiKey, styleID, mapStyle}) => {

	const [viewState, setViewState] = React.useState({
    longitude: -100,
    latitude: 40,
    zoom: 3,
  });

	return (
		<Stack
			style={{ margin: "4px" }}
			divider={<Divider orientation="vertical" flexItem />}
		>
			<MapboxMapContainer 
				viewState={viewState}
				setViewState={setViewState}
				apiKey={apiKey} 
				mapStyle={mapStyle} 
				styleID={styleID}
				pullKey={pullKey}
				lang={lang}
			/>
			{
				`Longitude: ${viewState.longitude}, Latitude: ${viewState.latitude}, zoom: ${viewState.zoom}`
			}
			<ExportPanel></ExportPanel>
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