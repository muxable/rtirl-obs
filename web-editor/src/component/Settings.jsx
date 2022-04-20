import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';


export const Settings = (props) => {
	
	const ZOOM_LEVELS = [...Array(15).keys()].map(i => i + 1);
	return (
		
		<Box style={{width: "256px", height: "490px", backgroundColor: "#d6a1ed", margin: "16px", padding: "16px"}} paddingLeft={4} borderRadius={4}>
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
						label="Required"
						defaultValue="Pull Key from rtirl.com"
						variant="standard"
        	/>
				</Box>

				{/* zoom level selector */}
				<Box>
					<FormControl  style={{width: 128}}>
						<InputLabel id="select-zoom-level-label">Zoom level</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							// value={age}
							label="Zoom level"
							// onChange={handleChange}
						>
							{
								ZOOM_LEVELS.map(zoomLevel => (
									 <MenuItem key={zoomLevel} value={zoomLevel}>{zoomLevel}</MenuItem>
								),)
							}
						</Select>
					</FormControl>
				</Box>

				{/* language selector */}
				<Box>
					<FormControl  style={{width: 128}}>
						<InputLabel id="select-language-label"> Language </InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							// value={age}
							label="Zoom level"
							// onChange={handleChange}
						>
							<MenuItem> EN </MenuItem>
							<MenuItem> AR </MenuItem>
							<MenuItem> FR </MenuItem>
							<MenuItem> JA </MenuItem>
							<MenuItem> KO </MenuItem>
							<MenuItem> CN </MenuItem>
						</Select>
					</FormControl>
				</Box>

			</Stack>
		</Box>
	)
}