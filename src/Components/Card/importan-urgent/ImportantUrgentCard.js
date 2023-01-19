import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { ReactComponent as People } from "../../../assets/people.svg";

export default function ImportantUrgentCard() {
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
          width: "300px"
        }}
      >
        <CardContent>
          <Grid container >
            <Grid item>
              <Typography variant="h6" sx={{ color: "fontColor.main", fontWeight: "600", pb: 5 }}>Important Urgent</Typography>
            </Grid>
            <Grid item md={11.5}>
              <Typography sx={{ color: "fontColor.main" }}>Due</Typography>
            </Grid>
            <Grid item md={0.5}>
              <Typography sx={{ color: "fontColor.main" }}>0</Typography>
            </Grid>
            <Grid item md={11.5} sx={{ borderBottom: "1px solid #ffffff" }}>
              <Typography sx={{ color: "fontColor.main" }}>Due date</Typography>
            </Grid>
            <Grid item md={0.4}>
              <Typography
                sx={{
                  color: "fontColor.main",
                  borderBottom: "1px solid #ffffff",
                }}
              >
                0
              </Typography>
            </Grid>
            <Grid item sx={{ py: 5, mx: "auto" }}>
              <People />
            </Grid>
            <Grid item>
              <Box sx={{ pl: 4, pb: 12 }}>
                <Typography
                  sx={{ color: "fontColor.main", fontWeight: 600, fontSize: "1.8em" }}
                >
                  No task found
                </Typography>
                <Typography sx={{ color: "fontColor.main", fontSize: "1em" }}>
                  You can add task by tapping the (+) icon below
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            fullWidth
            startIcon={<AddIcon />}
            sx={{ color: "card.main1", backgroundColor: "#ffffff", "&:hover": {
              backgroundColor: "#ffffff"
            }}}
          >
            Add new task
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
