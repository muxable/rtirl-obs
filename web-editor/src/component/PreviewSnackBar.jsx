import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export const PreviewSnackBar = ({ open, setOpen, errorMessage }) => {


  return (
    <Snackbar
      open={open}
      autoHideDuration={2500}
      onClose={() => {
        setOpen({...open, open: false});
      }}
    >
      <MuiAlert
        variant="filled"
        elevation={6}
        onClose={() => {
          setOpen({...open, open: false});
        }}
        severity="error"
      >
        {errorMessage}
      </MuiAlert>
    </Snackbar>
  );
};
