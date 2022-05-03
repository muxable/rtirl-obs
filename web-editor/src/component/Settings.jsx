import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import ControlPanel from './ControlPanel';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { IconButton } from '@mui/material';
import { StyleIDHelperDialog } from './StyleIDHelperDialog';


export const Settings = ({onStyleIDSubmit, apiKey, setAPIKey, styleID, setStyleID, pullKey, setPullKey, zoom, setZoom, lang, setLang, mapStyle, setMapStyle}) => {

	const [openStyleIDDialog, setOpenStyleIDDialog] = React.useState(false);
	
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
						onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
						onChange={(e) => setAPIKey(e.target.value)}
        	/>
				</Box>

				{/* Style Id form */}
				<Box
					component="form"
					noValidate
					autoComplete="off"
					style={{position: "relative"}}
				>
					<IconButton
						onClick={() => setOpenStyleIDDialog(true)}
						style={{position: "absolute", right: "0px"}}
					>
						<QuestionMarkIcon />
					</IconButton>

					<TextField
						id="tf-style-id"
						label="Style ID"
						variant="standard"
						defaultValue="mapbox/streets-v11"
						helperText="mapbox/streets-v11"
						value={styleID}
						onSubmit={() => onStyleIDSubmit(styleID)}
						onInput={(e) => setStyleID(e.target.value)}
						// onChange={(e) => setStyleID(e.target.value)}
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
						helperText="Pull Key from rtirl.com"
						variant="standard"
						value = {pullKey}
						onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
						onChange = {(e) => setPullKey(e.target.value)}
        	/>
				</Box>

				{/* Map style controll */}
				<Box>
					<ControlPanel 
						onChange={setMapStyle} 
						language={lang} 
						setLanguage={setLang}
						mapStyle={mapStyle}
					>	
					</ControlPanel>
				</Box>
			</Stack>
			
			
			<StyleIDHelperDialog
				open={openStyleIDDialog}
				setOpen={setOpenStyleIDDialog}
			/>
		</Box>
	)
}