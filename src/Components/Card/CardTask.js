import React from "react";
import { Link } from "react-router-dom";

// component MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// icon MUI
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function CardTask({
  title,
  date,
  status,
  updateEvent,
  completeEvent,
  deleteEvent,
}) {
  // const [checked, setChecked] = useState(false);

  // const clickChecked = () => {
  //   setChecked(!checked);
  // };

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 3,
          padding: 2,
          mb: 1.5,
          cursor: "pointer",
        }}
        // onClick={updateEvent}
      >
        <Grid container>
          <Grid item>
            <Typography sx={{ fontWeight: 600 }} onClick={updateEvent}>{title}</Typography>
          </Grid>
          <Grid container justifyContent="space-between" sx={{ pt: 2, pb: 1 }}>
            <Grid item>
              <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                {date}
              </Typography>
            </Grid>
            <Grid item>
              <Link
                to={"#"}
                onClick={deleteEvent}
                style={{
                  color: "inherit",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                <DeleteOutlineOutlinedIcon
                  sx={{
                    fontSize: "40px",
                    "&:hover": {
                      color: "red",
                    },
                  }}
                />
              </Link>
            </Grid>
            <Grid item>
              {status === "completed" ? (
                <CheckCircleIcon
                  sx={{
                    fontSize: "40px",
                    color: "green",
                    "&:hover": {
                      color: "green",
                    },
                  }}
                  onClick={completeEvent}
                />
              ) : (
                <CheckCircleOutlineRoundedIcon
                  sx={{
                    fontSize: "40px",
                    "&:hover": {
                      color: "green",
                    },
                  }}
                  onClick={completeEvent}
                />
              )}
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              backgroundColor: "rgba(217, 217, 217, 0.15)",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.25)",
              width: "70px",
              textAlign: "center",
              py: 0.5,
              ml: "auto",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
              {status}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
