import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import ControlPanel from './ControlPanel';


export const Settings = ({apiKey, setAPIKey, styleID, setStyleID, pullKey, setPullKey, zoom, setZoom, lang, setLang, mapStyle, setMapStyle}) => {
	
	return (
		
		<Box style={{width: "256px", height: "656px", backgroundColor: "#d6a1ed", margin: "16px", padding: "16px"}} paddingLeft={4} borderRadius={4}>
					<Stack 
				divider={<Divider orientation="vertical" flexItem />}
				spacing={2}
				textAlign="left"
				>
				<Typography variant="h6" color="inherit" component="div">
					Settings
				</Typography>

				{/* API key form */}
				<Box
					component="form"
					noValidate
					autoComplete="off"
				>
					<TextField
						required
						id="standard-required"
						label="API Key"
						defaultValue="Your API Key"
						variant="standard"
						value={apiKey}
						onChange={(e) => setAPIKey(e.target.value)}
        	/>
				</Box>

				{/* Style Id form */}
				<Box
					component="form"
					noValidate
					autoComplete="off"
				>
					<TextField
						id="tf-style-id"
						label="Style ID"
						variant="standard"
						value={styleID}
						onChange={(e) => setStyleID(e.target.value)}
        	/>
				</Box>

				{/* Pull key from rtirl.com */}
				<Box
					component="form"
					noValidate
					autoComplete="off"
				>
					<TextField
						required
						id="standard-required"
						label="Pull Key"
						defaultValue="Pull Key from rtirl.com"
						variant="standard"
						value = {pullKey}
						onChange = {(e) => setPullKey(e.target.value)}
        	/>
				</Box>

				{/* Map style controll */}
				<Box>
					<ControlPanel onChange={setMapStyle} language={lang} setLanguage={setLang}></ControlPanel>
				</Box>
			</Stack>
		</Box>
	)
}