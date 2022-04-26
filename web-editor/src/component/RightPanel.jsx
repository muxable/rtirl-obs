import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ExportPanel } from './ExportPanel';
import { ConsolePanel } from './ConsolePanel';
import { MapboxMapContainer } from './MapboxMapContainer';


export const RightPanel = ({zoom, lang, pullKey, mapboxToken, styleID}) => {

	return (
		<Stack
			style={{ margin: "4px" }}
			divider={<Divider orientation="vertical" flexItem />}
		>

			<MapboxMapContainer></MapboxMapContainer>
			<ExportPanel></ExportPanel>
			<ConsolePanel 
				zoom={zoom}
				styleID={styleID}
				pullKey={pullKey}
				mapboxToken={mapboxToken}
			></ConsolePanel>
		</Stack>
	)

}