import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { Settings } from '../component/Settings';
import { RightPanel } from '../component/RightPanel';

export const EditorScreen = (props) => {

	const [apiKey, setAPIKey] = useState("");
	const [styleID, setStyleID] = useState("");
	const [pullKey, setPullKey] = useState("");
	const [zoom, setZoom] = useState(5);
	const [lang, setLang] = useState("EN");

	return (
    <Stack direction="row">
      <Settings 
        apiKey={apiKey} 
        setAPIKey={setAPIKey}
        styleID={styleID}
        setStyleID={setStyleID}
        pullKey={pullKey}
        setPullKey={setPullKey}
        zoom={zoom}
        setZoom={setZoom}
        lang={lang}
        setLang={setLang}
        >
      </Settings>
      <RightPanel
        zoom={zoom}
        lang={lang}
        pullKey={pullKey}
        apiKey={apiKey}
        styleID={styleID}
        >
      </RightPanel>
    </Stack>
	)

}