import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";
import ErrorNotification from "../Components/Notification/ErrorNotification";

function ConfrimEmailFp({ confrimEfp, unConfirmEfp, bgConfirmEfp }) {
  return (
    <Modal
      open={bgConfirmEfp}
      BackdropProps={{
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <Snackbar
        open={confrimEfp}
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(57%, -50%)",
          position: "absolute",
        }}
      >
        <Alert
          icon={false}
          onClose={unConfirmEfp}
          sx={{
            backgroundColor: "white",
            color: "black",
            width: "60%",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
          }}
        >
          <AlertTitle sx={{ pb: 1 }}>Email Terkirim</AlertTitle>
          Kami mengirimkan email ke <strong>p*******2@gmail.com</strong> beserta
          tautan untuk kembali ke akun anda
        </Alert>
      </Snackbar>
    </Modal>
  );
}

function ForgotPasswordModal({ isOpen, onClose, notification }) {
  const [isNewPasswordModalOpen, setIsNewPasswordModalOpen] = useState(false);

  function handleForgotPasswordSubmit(event) {
    event.preventDefault();
    onClose();
    setIsNewPasswordModalOpen(true);
  }

  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={handleForgotPasswordSubmit}
      >
        <Card
          style={{
            backgroundColor: "white",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25",
            padding: "16px",
            width: "85%",
            maxWidth: "600px",
          }}
        >
          <CardHeader title="Masukkan Email Anda" sx={{ fontWeight: 600 }} />
          <CardContent>
            {/* <Typography variant="body2" color="text.secondary">
              Please enter your email address below and we will send you
              instructions on how to reset your password.
            </Typography>
            Isi modal */}
            <Box
              component="form"
              // onSubmit={handleSubmit}
              noValidate
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </Box>
          </CardContent>
          <CardActions>
            <Grid
              container
              justifyContent={"flex-end"}
              spacing={2}
              sx={{ pr: 1 }}
            >
              <Grid item>
                <Button
                  type="submit"
                  onClick={onClose}
                  variant="contained"
                  sx={{
                    color: "black",
                    backgroundColor: "#C5C7C9",
                    "&:hover": { backgroundColor: "#C5C7C9" },
                  }}
                >
                  Batal
                </Button>
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={notification}
                  sx={{
                    color: "white",
                    backgroundColor: "#1877F2",
                    "&:hover": {
                      backgroundColor: "#1877F2",
                    },
                    px: 5,
                  }}
                >
                  Lanjutkan
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Modal>
    </>
  );
}

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [openConfirmEmailReset, setConfirmEmailReset] = useState(false);
  const [openConfirmEmailResetBg, setOpenConfirmEmailResetBg] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const push = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://backend-opus.vercel.app/login",
        {
          email: email,
          password: password,
        }
      );

      // error form
      if (!email || !password) {
        setMsg("Please fill in all the fields.");
        setTimeout(() => setMsg(""), 5000);
        setLoading(false);
        return;
      }

      // kondisi jika benar
      if (response.status === 200) {
        // if api call is successful
        localStorage.setItem("token", response.data.token);
      }

      push("/");
    } catch (err) {
      setError(err.response.data.message);
    }
    setLoading(false);
  };

  //open alert confirm
  const openAlertConfirmefp = () => {
    setConfirmEmailReset(true);
    setOpenConfirmEmailResetBg(true);
    setIsOpen(false);
  };

  const closeAlertConfirmefp = () => {
    setConfirmEmailReset(false);
    setOpenConfirmEmailResetBg(false);
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
          p: 4,
        }}
      >
        {/* <Logo width="80" height="80" /> */}
        <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 2, mb: 2 }}
        >
          {msg && <ErrorNotification message={msg} />}
          {error && <p severity="error">{error}</p>}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            autoComplete="email"
            onChange={(event) => setEmail(event.target.value)}
            {...(error && { error: true })}
            value={email}
            autoFocus
            placeholder="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "black" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 2,
              "&::placeholder": {
                color: "red",
              },
            }}
          />

          <FormControl fullWidth variant="outlined" sx={{ mb: 0.3 }}>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              {...(error && { error: true, helperText: error })}
              value={password}
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
                    {showPassword ? (
                      <VisibilityOff sx={{ color: "black" }} />
                    ) : (
                      <Visibility sx={{ color: "black" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Link href="#" variant="body2" onClick={handleOpen} underline="none">
            Forgot password?
          </Link>
          {/* modal forgot password */}
          <ForgotPasswordModal
            isOpen={isOpen}
            onClose={handleClose}
            notification={openAlertConfirmefp}
          />
          {/* modal confirm email forgot password */}
          <ConfrimEmailFp
            confrimEfp={openConfirmEmailReset}
            unConfirmEfp={closeAlertConfirmefp}
            bgConfirmEfp={openConfirmEmailResetBg}
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
            Login
          </Button>
          <Grid container justifyContent={"center"}>
            <Grid item>
              <Link
                href="/register"
                variant="body2"
                color="inherit"
                underline="none"
              >
                Don't have an account? <strong>Sign Up</strong>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
