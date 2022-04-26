import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export const ConsolePanel = ({zoom, lang, pullKey, mapboxToken, styleID}) => {

	return (
			<Stack 
				style={{marginLeft: "16px"}}
				alignSelf="flex-start"
				justifyContent="flex-start"
				>
				<aside>
					<h2> Generic URL by Muxable</h2>
					<Typography
						color="inherit"
						component="div"
						style={{textOverflow: "ellipsis"}}>
						https://overlays.rtirl.com/mapbox.html?key={pullKey}&access_token={mapboxToken}&style={styleID}
					</Typography>	
				</aside>
				<aside>
					<h2> Your Customized Mapbox Style</h2>
					<Typography
						color="inherit"
						component="div"
						style={{textOverflow: "ellipsis"}}>
						https://overlays.rtirl.com/mapbox.html?key={pullKey}&access_token={mapboxToken}&style={styleID}
					</Typography>	
				</aside>
		
			</Stack>
	
	)

}