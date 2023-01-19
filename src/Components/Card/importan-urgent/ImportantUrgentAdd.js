import { useState } from "react";

// import MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";

// icon MUI
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import NotificationsOffOutlinedIcon from "@mui/icons-material/NotificationsOffOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

export default function ImportantUrgentAdd() {
  // lengt text usestate
  const [count, setCount] = useState(50);
  const [limit, setLimit] = useState(50);

  // length text function
  const change = (e) => {
    let convert = e.target.value.length;
    let result = limit - convert;

    setCount(result);
  };

  return (
    <Box
      sx={{
        my: 5,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          backgroundColor: "card.main1",
          borderRadius: "20px",
          pt: 1,
          pb: 2,
          px: 2,
          width: "300px",
        }}
      >
        <CardContent>
          <Grid container>
            <Grid
              item
              md={12}
              sx={{ borderBottom: "1px solid #ffffff", pb: 1.5 }}
            >
              <Typography
                variant="h6"
                sx={{ color: "fontColor.main", fontWeight: "600" }}
              >
                Important Urgent
              </Typography>
            </Grid>
            <Grid item md={12} sx={{ pt: 5 }}>
              <InputLabel sx={{ color: "fontColor.main", fontSize: "1.4em" }}>
                What's your plan?
              </InputLabel>
              <Input
                type="text"
                fullWidth
                onChange={change}
                disableUnderline
                inputProps={{ maxLength: 50 }}
                sx={{
                  color: "fontColor.main",
                  pt: 1.5,
                  borderBottom: "1px solid #ffffff",
                }}
              />
              <Typography variant="caption" sx={{ color: "fontColor.main" }}>
                {count} Characters Remaining
              </Typography>
            </Grid>
            <Grid container spacing={2} sx={{ pt: 5 }}>
              <Grid item md={6}>
                <Box
                  sx={{
                    backgroundColor: "fontColor.main",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 1.2,
                    borderRadius: "10px",
                  }}
                >
                  <CalendarMonthOutlinedIcon fontSize="large" />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      paddingTop: "5px",
                    }}
                  >
                    Oct 6, 2022
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      paddingTop: "-100px",
                    }}
                  >
                    11:02 AM
                  </Typography> 
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box
                  sx={{
                    backgroundColor: "fontColor.main",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 1.2,
                    borderRadius: "10px",
                  }}
                >
                  <NotificationsNoneOutlinedIcon fontSize="large" />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      paddingTop: "5px",
                      paddingBottom: "18px",
                    }}
                  >
                    Notification : ON
                  </Typography>
                </Box>
              </Grid>
              {/* <Grid item md={6}>
                <Box sx={{backgroundColor:"fontColor.main", display: "flex", flexDirection: "column", alignItems: "center", padding: 1.2, borderRadius:"10px"}}>
                  <NotificationsOffOutlinedIcon fontSize="large" />
                  <Typography sx={{fontSize: "12px", fontWeight: 600, paddingTop: "5px", paddingBottom: "18px"}}>Notification : Off</Typography>
                </Box>
              </Grid> */}
              <Grid item md={12}>
                <Box
                  sx={{
                    backgroundColor: "fontColor.main",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 1,
                    borderRadius: "10px",
                  }}
                >
                  <DriveFileRenameOutlineOutlinedIcon fontSize="large" />
                  <Typography sx={{ fontWeight: 600, fontSize: "12px", pl: 1 }}>
                    Write Notes
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justifyContent="center" spacing={4} sx={{ pt: 26 }}>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                  color: "card.main1",
                  backgroundColor: "#ffffff",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                  },
                }}
              >
                Add
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<ArrowBackRoundedIcon />}
                sx={{
                  color: "card.main1",
                  backgroundColor: "#ffffff",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                  },
                }}
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Box>
  );
}
