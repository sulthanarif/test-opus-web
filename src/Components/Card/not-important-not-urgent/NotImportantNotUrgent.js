import { useState } from "react";
import axios from "axios";

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

export default function NotImportantNotUrgent({ event }) {
  const tokenAuth = localStorage.getItem("token");

  // lengt text usestate
  const [count, setCount] = useState(50);
  const [limit, setLimit] = useState(50);
  const [date, setDate] = useState(dayjs(""));

  // data add
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // add todo
  const addTodo = async (e) => {
    e.preventDefault();
    const convert = date.format();
    try {
      const res = await axios.post(
        "https://backend-opus.vercel.app/tasks/create",
        {
          category_id: "4",
          name: title,
          description: desc,
          due_date: convert,
          status: "",
        },
        {
          headers: {
            token: `${tokenAuth}`,
          },
        }
      );
    } catch (err) {
      return err;
    }
  };

  const changeDate = (val) => {
    setDate(val);
  };
  return (
    <Box>
      <form onSubmit={addTodo}>
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
              Not Important Not Urgent
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
                setTitle(e.target.value);
                setCount(limit - e.target.value.length);
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
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid white",
                    },
                    "& .MuiOutlinedInput-root": { border: "1px solid white" },
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item>
            <Box sx={{ display: "flex", gap: 2, pt: 33  }}>
              <Button
                type="submit"
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                  color: "card.main4",
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
              <Button
                variant="contained"
                startIcon={<ArrowBackRoundedIcon />}
                onClick={event}
                sx={{
                  color: "card.main4",
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
