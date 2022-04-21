import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export const HomeScreen = (props) => {

	return (
		<Stack alignItems="center" style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }}
		>
			<Typography variant="h6" color="inherit" component="div">
				RealtimeIRL Overlay Editor
			</Typography>
			<Typography variant="h6" color="inherit" component="div">
				Choose an overlay to get started
			</Typography>
			<Stack direction="row">
				<Stack>
					<Box style={{
						width: "256px", 
						height: "256px", 
						marginLeft: "32px",
						marginRight: "32px",
						marginTop: "32px",
						marginBottom: "8px",
						backgroundColor: "gray"
					}}></Box>
				<Typography variant="h6" color="inherit" component="div">
					google map
				</Typography>
				</Stack>
								<Stack>
					<Box style={{
						width: "256px", 
						height: "256px", 
						marginLeft: "32px",
						marginRight: "32px",
						marginTop: "32px",
						marginBottom: "8px",
						backgroundColor: "gray"
					}}></Box>
				<Typography variant="h6" color="inherit" component="div">
					Mapbox
				</Typography>
				</Stack>
								<Stack>
					<Box style={{
						width: "256px", 
						height: "256px", 
						marginLeft: "32px",
						marginRight: "32px",
						marginTop: "32px",
						marginBottom: "8px",
						backgroundColor: "gray"
					}}></Box>
				<Typography variant="h6" color="inherit" component="div">
					Leaflet
				</Typography>
				</Stack>
			</Stack>
		</Stack>
	)

}