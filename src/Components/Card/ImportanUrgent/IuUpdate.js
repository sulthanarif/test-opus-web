import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// import MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";

// import datetimepicker
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// icon MUI
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

export default function ImportantUrgentAdd({ event }) {
  const tokenAuth = localStorage.getItem("token");
  const push = useNavigate();

  // lengt text usestate
  const [count, setCount] = useState(50);
  const [limit, setLimit] = useState(50);

  // data add
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState(dayjs(""));

  // get task by id
  const getTaskById = async() => {
    try {
      const res = await axios.get(
        `https://backend-opus.vercel.app/tasks/${id}`,
        {
          headers: {
            token: `${tokenAuth}`,
          },
        }
      );
      console.log(res)
    } catch (err) {
      return err;
    }
  }

  // update todo
  const updateTodo = async (e) => {
    e.preventDefault();
    const convert = date.format();
  
    try {
      const res = await axios.put(
        `https://backend-opus.vercel.app/tasks/${id}/update`,
        {
          category_id: "1",
          id: id,
          name: title,
          description: desc,
          due_date: convert,
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
  };

  const changeDate = (val) => {
    setDate(val);
  };

  return (
    <Box sx={{width: "245px"}}>
      <form>
        <Grid container>
          <Grid
            item
            md={12}
            sx={{ borderBottom: "1px solid #ffffff", pb: 1.5 }}
          >
            <Typography
              sx={{
                color: "fontColor.main",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Important Urgent
            </Typography>
          </Grid>
          <Grid item md={12} sx={{ pt: 5 }}>
            <InputLabel
              sx={{ color: "fontColor.main", pb: 1, fontSize: "16px" }}
            >
              What's your plan?
            </InputLabel>
            <Input
              type="text"
              fullWidth
              value={title}
              onChange={(e) => { 
                setTitle(e.target.value)
                setCount(limit - e.target.value.length)
              }}
              disableUnderline
              placeholder="Text"
              inputProps={{ maxLength: 50 }}
              sx={{
                color: "fontColor.main",
                border: "1px solid white",
                borderRadius: "5px",
                py: 0.5,
                px: 3,
                mb: 0.5,
              }}
            />
            <Typography variant="caption" sx={{ color: "fontColor.main" }}>
              {count} Characters Remaining
            </Typography>
          </Grid>
          <Grid item md={12} sx={{ pt: 2 }}>
            <InputLabel
              sx={{ color: "fontColor.main", pb: 1, fontSize: "16px" }}
            >
              Notes
            </InputLabel>
            <Input
              type="text"
              fullWidth
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              disableUnderline
              placeholder="Text"
              sx={{
                color: "fontColor.main",
                border: "1px solid white",
                borderRadius: "5px",
                py: 0.5,
                px: 3,
                mb: 1,
              }}
            />
          </Grid>
          <Grid item md={12} sx={{ pt: 2 }}>
            <InputLabel
              sx={{ color: "fontColor.main", pb: 1, fontSize: "16px" }}
            >
              Due
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                renderInput={(props) => <TextField {...props} />}
                components={{
                  OpenPickerIcon: CalendarMonthOutlinedIcon,
                }}
                value={date}
                onChange={changeDate}
                InputProps={{
                  sx: {
                    "& .MuiSvgIcon-root": { color: "rgba(255,255,255,0.8)" },
                    "& .MuiInputBase-input": { color: "white", py: 1.5, px: 3 },
                    "& .MuiOutlinedInput-notchedOutline": { border: "1px solid white" },
                    "& .MuiOutlinedInput-root" : {border: "1px solid white"}
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item>
            <Box sx={{ display: "flex", gap: 2, pt: 33 }}>
              <Button
                type="submit"
                variant="contained"
                onClick={updateTodo}
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
                Edit
              </Button>
              <Button
                variant="contained"
                startIcon={<ArrowBackRoundedIcon />}
                onClick={event}
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
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
