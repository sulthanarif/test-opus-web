import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect } from "react";

export default function Pending() {
  const tokenAuth = localStorage.getItem("token");
  const [pending, setPending] = useState(0);
  const [task, setTask] = useState([]);

  const dataPending = async () => {
    try {
      const response = await axios.get(
        "https://backend-opus.vercel.app/tasks",
        {
          headers: {
            token: `${tokenAuth}`,
          },
        }
      );

      let count = 1;
      for (let x of response.data.message) {
        if (x.status === "pending") {
          setPending(count++);
        }  
      }
      // task.forEach((x) => {
      //   if (x.status === "pending") {
      //     setPending(count++);
      //   }
      // });

      return count;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    dataPending();
  }, [tokenAuth]);

  return (
    <Box>
      <Paper elevation={4} sx={{ py: 1, px: 3 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item>
            <Typography
              sx={{
                backgroundColor: "#FFB41F",
                color: "#FFFFFF",
                fontSize: "14px",
                px: 0.8,
                borderRadius: "5px",
              }}
            >
              {pending}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>Total Tasks Pending</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
