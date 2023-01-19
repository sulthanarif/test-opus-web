import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Pending() {
  return (
      <Box>
      <Paper elevation={4} sx={{py: 1, px:4}}>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item>
            <Typography sx={{ backgroundColor: "#FFB41F", color: '#FFFFFF', py:0.2, px:1, borderRadius: '5px' }}>0</Typography>
          </Grid>
          <Grid item>
            <Typography>Total Tasks Pending</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
