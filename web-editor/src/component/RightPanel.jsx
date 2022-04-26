import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { ExportPanel } from './ExportPanel';
import { ConsolePanel } from './ConsolePanel';
import { MapboxMapContainer } from './MapboxMapContainer';


export const RightPanel = ({zoom, lang, pullKey, apiKey, styleID}) => {

	return (
		<Stack
			style={{ margin: "4px" }}
			divider={<Divider orientation="vertical" flexItem />}
		>

			<MapboxMapContainer apiKey={apiKey}></MapboxMapContainer>
			<ExportPanel></ExportPanel>
			<ConsolePanel 
				lang={lang}
				zoom={zoom}
				styleID={styleID}
				pullKey={pullKey}
				apiKey={apiKey}
			></ConsolePanel>
		</Stack>
	)

}