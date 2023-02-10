import React, { useState, useEffect } from "react";
import axios from "axios";
import IuUpdate from "./IuUpdate";
import IuTask from "./IuTask"
import {useNavigate, useParams} from 'react-router-dom';

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

export default function IuShow({ event, btnColor, categoryName }) {
  const tokenAuth = localStorage.getItem("token");
  const [iuUpdateShow, setIuUpdateShow] = useState(false);
  const [task, setTask] = useState([]);
  const push = useNavigate();

  // get task
  const getTaskById = async () => {
    try {
      const resTask = await axios.get(`https://backend-opus.vercel.app/tasks`, {
        headers: {
          token: `${tokenAuth}`,
        },
      });

      return resTask.data;

    } catch (err) {
      console.log(err);
    }
  };

  // open update
  const openUpdate = (id) => {
    setIuUpdateShow(true)
    console.log()
  }

  // close update
  const closeUpdate = () => {
    setIuUpdateShow(false) 
  }

  return (
    <Box>
      <Grid container>
        {iuUpdateShow ? (
          <Grid item md={10}>
            <IuUpdate event={() => closeUpdate()}/>
          </Grid>
        ) : (
          <IuTask btnColor={btnColor} categoryName={categoryName} event={event} updateEvent={() => openUpdate(task)} />
        )}
      </Grid>
    </Box>
  );
}
