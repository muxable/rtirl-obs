import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export const ExportPanel = (props) => {

	return (
		<Stack
			style={{margin: "16px"}}
			direction="row"
			divider={<Divider orientation="vertical" flexItem />}
			spacing={2}
		>
			<Typography 
				style={{marginRight: "128px", marginLeft: "8px", alignSelf: "center"}}
				color="inherit" 
				component="div">
					Export to
			</Typography>
			<Button> OBS </Button>
			<Button> StreamElements </Button>
			<Button> Prism Live </Button>
		</Stack>
	)

}