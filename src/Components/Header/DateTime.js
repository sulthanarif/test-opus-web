import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function DateTime() {
  const d = new Date();
  const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "may",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = weekDay[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();

  return (
    <Box>
      <Grid container spacing={0.5}>
        <Grid item>
          <Typography variant="h4">{date}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">|</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ marginTop: -1 }}>
            {day}
          </Typography>
          <Box sx={{ display: "flex", columnGap: 1.3 }}>
            <Typography variant="h5" sx={{ marginTop: -0.8 }}>
              {month}
            </Typography>
            <Typography variant="h5" sx={{ marginTop: -0.8 }}>
              /
            </Typography>
            <Typography variant="h5" sx={{ marginTop: -0.8 }}>
              {year}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
