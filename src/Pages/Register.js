import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Register() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const push = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://backend-opus.vercel.app/register", {
        username : username,
        email: email,
        password: password,
      });
      console.log(response);
      push('/login')
    } catch (err) {
      console.log(err);
    }
  };


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "85vh",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        <Typography component="h1" variant="h5" sx={{ fontWeight: 600 }}>
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="fullName"
                required
                fullWidth
                id="fullName"
                onChange={(event) => setUserName(event.target.value)}
                value={username}
                autoFocus
                placeholder="Username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{color: "black"}} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                autoComplete="email"
                placeholder="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{color: "black"}} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                  placeholder="Password"
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: "black" }} />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff sx={{ color: "black" }} /> : <Visibility sx={{ color: "black" }} />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              background: "linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%)",
            }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent={"center"}>
            <Grid item>
              <Link
                href="/login"
                variant="body2"
                color="inherit"
                underline="none"
              >
                Already have an account? <strong>Sign in</strong>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
