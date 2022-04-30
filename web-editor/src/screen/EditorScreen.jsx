import * as React from 'react';
import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { Settings } from '../component/Settings';
import { RightPanel } from '../component/RightPanel';

export const EditorScreen = () => {

  const [mapStyle, setMapStyle] = useState(null);
	const [apiKey, setAPIKey] = useState("");
	const [styleID, setStyleID] = useState("");
	const [pullKey, setPullKey] = useState("");
	const [zoom, setZoom] = useState(5);
	const [lang, setLang] = useState("EN");

  useEffect(() => {
    fetch("https://api.mapbox.com/styles/v1/mapbox/streets-v11?access_token=pk.eyJ1Ijoia2V2bW8zMTQiLCJhIjoiY2oyMDFlMGpsMDN3bTJ4bjR1MzRrbDFleCJ9.7XEB3HHBGr-N6ataUZh_6g")
      .then(res => res.json())
      .then(res => {
        setMapStyle(res);
      });
  }, [])

	return (
    <Stack direction="row">
      <Settings 
        mapStyle={mapStyle}
        setMapStyle={setMapStyle}
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
        mapStyle={mapStyle}
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