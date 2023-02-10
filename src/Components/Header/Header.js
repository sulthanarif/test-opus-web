import React from "react";

// import MaterialUI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

// import
import Logo from "./Logo";
import Pending from "./Pending";
import Profile from "./Profile";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%)",
        py: 1,
        px: 6,
      }}
    >
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="Center">
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <Pending />
          </Grid>
          <Grid item>
            <Profile />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
