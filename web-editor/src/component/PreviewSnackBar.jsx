import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const PreviewSnackBar = ({open, setOpen}) => {
	return (
		<Snackbar open={open} autoHideDuration={5000} onClose={() => {setOpen(false)}}>
			<MuiAlert
				variant="filled"
				elevation={6}
				onclose={() => {setOpen(false)}}
				severity="error"
			>
				To preview a stylized map, please enter a formatted public styleId and a valid map token.
			</MuiAlert>
		</Snackbar>
	)
}