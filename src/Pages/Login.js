import React, {useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Alert  from "@mui/material/Alert"; // for error messages
import axios from 'axios'; // for api calls

const theme = createTheme();

export default function Login() {

  const [error, setError] = React.useState(''); // for error messages
  const [loading, setLoading] = React.useState(false); // for loading
  const [email, setEmail] = React.useState(''); // for email
  const [password, setPassword] = React.useState(''); // for password
  const [msg, setMsg] = React.useState(''); // for success messages
  
  const handleSubmit = async (event) => { // for form submission
    event.preventDefault();
    setLoading(true);
    // const data = new FormData(event.currentTarget);
    try {
      const response = await axios.post('https://backend-opus.vercel.app/login', {
        email: email,
        password: password,
      }); // api call

      if(response.status === 200)  { // if api call is successful
        localStorage.setItem("token", response.data.token);
        //redirect to the dashboard or home page
        console.log(response.data);
        setMsg(response.data.message);
      } 
    } catch (error) { // if api call is not successful
      setError(error.response.data.message)
    }
    setLoading(false);
  };

  const [showPassword, setShowPassword] = React.useState(false); // for password visibility
  const handleClickShowPassword = () => setShowPassword((show) => !show); // for password visibility
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "80vh",
              border: "1px solid black",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 4,
              paddingRight: 4,
            }}
          > 
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {msg && <Alert severity="error">{msg}</Alert>}
            <Box
              component="form"
              onSubmit={handleSubmit} // for form submission
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={(e) => setEmail(e.target.value)} // for email
                value={email} // for email
                id="email"
                {...(error && {error: true, helperText: error})} // for error messages
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                placeholder="Email Address"
                InputProps={{
                  startAdornment: <InputAdornment position="start"><EmailIcon/></InputAdornment>,
                }}
              />

              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                      startAdornment={
                        <InputAdornment position="start"><LockIcon/></InputAdornment>
                      }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  color: "white",
                  background: "linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%)",
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
