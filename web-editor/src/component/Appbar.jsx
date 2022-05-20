import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export const EditorAppbar = ({mapProvider, setMapProvider}) => {

	const handleChange = (event, value) => {
		setMapProvider(value);
	}

	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<Typography variant="h6" color="inherit" component="div">
					Overlay Editor
				</Typography>
				<Tabs
					value={mapProvider}
					onChange={handleChange}
					textColor="secondary"
					indicatorColor="secondary"
				>
					<Tab value="mapbox" label="Mapbox" />
					<Tab value="google" label="Google Map" />
				</Tabs>
			</Toolbar>
		</AppBar>
	)

}