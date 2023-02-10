import React, { useState, useEffect } from "react";
import axios from "axios";
import CardTask from "../CardTask";
import IuUpdate from "./IuUpdate";

// component MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import dayjs from "dayjs";

// import icon
import AddIcon from "@mui/icons-material/Add";

//import svg
import { ReactComponent as People } from "../../../assets/people.svg";

export default function IuTask({categoryName, event, btnColor, updateEvent}) {
  const tokenAuth = localStorage.getItem("token");
  const [task, setTask] = useState([]);

  // get task
  const getTask = async () => {
    try {
      const resTask = await axios.get(`https://backend-opus.vercel.app/tasks`, {
        headers: {
          token: `${tokenAuth}`,
        },
      });

      return setTask(resTask.data.message.categor_id);
    } catch (err) {
      console.log(err);
    }
  };

  // delete task
  const deleteTask = (id) => {
    axios.delete(`https://backend-opus.vercel.app/tasks/${id}/delete`, {
        headers: {
          token: `${tokenAuth}`,
        }
    }).then(getTask());
  };

  // update the task
  const updateTask = (id) => {
    axios.put(`https://backend-opus.vercel.app/tasks/${id}/update`, {
      category_id: "1",
      id: id,
      name: "",
      description: "",
      due_date: "",
      status: "pending",
    }, {
      headers: {
        token: `${tokenAuth}`,
      }
    }).then(getTask());
  }

  // completed task
  const completedTask = async (id) => {
    try {
      const res = await axios.put(
        `https://backend-opus.vercel.app/tasks/${id}/update`,
        {
          category_id: "1",
          status: "pending",
        },
        {
          headers: {
            token: `${tokenAuth}`,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }

  }
  useEffect(() => {
    getTask();
  }, [tokenAuth]);

  return (
    <Box>
      <Grid container>
        <Grid item md={10}>
          <Typography
            sx={{
              color: "fontColor.main",
              fontWeight: "600",
              pb: 1.8,
              fontSize: "16px",
            }}
          >
            {categoryName}
          </Typography>
        </Grid>
        <Grid item>
          <Box sx={{ width: "250px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ color: "fontColor.main", fontSize: "14px" }}>
                Due
              </Typography>
              <Typography sx={{ color: "fontColor.main", fontSize: "14px" }}>
                0
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ color: "fontColor.main", fontSize: "14px" }}>
                Overdue
              </Typography>
              <Typography
                sx={{
                  color: "fontColor.main",
                  pb: 1,
                  fontSize: "14px",
                }}
              >
                0
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ borderColor: "white" }} />
        </Grid>
        <Grid item>
          {task.length === 0 ? (
            <Box sx={{ height: "450px" }}>
              <Box sx={{ py: 5, px: 2.5 }}>
                <People style={{ width: "200px" }} />
              </Box>
              <Box sx={{ pb: 20 }}>
                <Typography
                  sx={{
                    color: "fontColor.main",
                    fontWeight: 600,
                    fontSize: "16px",
                    pb: 1.5,
                    textAlign: "center",
                    letterSpacing: "0.05em",
                  }}
                >
                  No task found
                </Typography>
                <Typography
                  sx={{
                    color: "fontColor.main",
                    fontSize: "14px",
                    letterSpacing: "0.05em",
                    pl: 3,
                  }}
                >
                  You can add task by tapping the (+) icon below
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                py: 3,
                overflowY: "scroll",
                height: "450px",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {task.map((dataTask) => (
                <Box key={dataTask.id}>
                  <CardTask
                    title={dataTask.name}
                    date={dayjs(dataTask.due_date).format("DD MMM YYYY")}
                    status={dataTask.status}
                    deleteEvent={() => deleteTask(dataTask.id)}
                    updateEvent={() => updateEvent(dataTask.id)}
                    completedTask={() => completedTask(dataTask.id)}
                  />
                </Box>
              ))}
            </Box>
          )}
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={event}
            startIcon={<AddIcon />}
            sx={{
              color: btnColor,
              backgroundColor: "#ffffff",
              "&:hover": {
                backgroundColor: "#ffffff",
              },
              px: 6,
              mt: 4,
              ml: 1.5,
            }}
          >
            Add new task
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
