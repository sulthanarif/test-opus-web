import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';

export default function ErrorNotification({ open, message }) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "bottom",
      }}
      open={open}
      autoHideDuration={2000}
    >
      <Alert severity="error" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
