import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

export default function ProfileCard({ name, email, avatarIcon }) {
  return (
    <Box
      sx={{
        boxShadow: "0px 2px 8px rgba(0,0,0,0.5)",
        borderRadius: 2,
        px: 2,
        py: 3,
      }}
    >
      <Grid container alignItems={"center"}>
        <Grid item>
          <Avatar
            sx={{ width: "70px", height: "70px", fontSize: "36px", mr: 2 }}
          >
            {avatarIcon}
          </Avatar>
        </Grid>
        <Grid Item>
          <Typography sx={{ pb: 0.5 }}>{name}</Typography>
          <Divider />
          <Typography sx={{ pt: 0.5 }}>{email}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
