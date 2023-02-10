import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Divider from "@mui/material/Divider";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ConfirmResetPassword({ openCRP, closeCRP, backgroundCrp }) {
  return (
    <Dialog open={openCRP} close={closeCRP} >
      <DialogTitle sx={{fontWeight: 600, color: "black"}}>Kata Sandi Berhasil Diubah</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{pb: 4, color: 'black'}}>
          Gunakan kata sandi yang baru dibuat untuk login berikutnya. Selalu
          jaga kerahasiaan kata sandi untuk keamanan akun anda
        </DialogContentText>
        <DialogActions>
          <Button href="/login" variant="contained" sx={{px: 5}}>OK</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [isConfrimReset, setIsConfrimReset] = useState(false);
  const [bgConfirmReset, setBgConfirmReset] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const openConfirmReset = () => {
    setIsConfrimReset(true);
    setBgConfirmReset(true);
  };
  const closeConfirmReset = () => {
    setIsConfrimReset(false);
    setBgConfirmReset(false);
  };

  return (
    <>
      <Box
        component="main"
        sx={{ display: "flex", justifyContent: "center", height:'100vh', backgroundColor: "#F3F2EF",}}
      >
        <Box
          sx={{
            borderRadius: "5px",
            width: "33rem",
            my:12,
            justifyContent: "center",
            backgroundColor: "white",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography component="h1" variant="h6" sx={{ fontWeight: 600 }}>
              Pilih Kata Sandi Baru
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography sx={{ py: 2 }}>
              Buat kata sandi baru yang berisi sedikitnya 6 karakter. Kata sandi
              yang kuat adalah kombinasi huruf, angka, dan tanda baca.
            </Typography>
            <Box
              component="form"
              //   onSubmit={handleSubmit}
              noValidate
              sx={{ pt: 4, pb: 2 }}
            >
              <FormControl fullWidth variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Kata Sandi Baru"
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
                />
              </FormControl>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="submit"
              variant="contained"
              onClick={openConfirmReset}
              sx={{
                color: "black",
                // background: "linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%)",
                background: "#C5C7C9",
                "&:hover": {
                  backgroundColor: "#C5C7C9",
                },
                fontWeight: 600,
                px: 5,
              }}
            >
              Lanjutkan
            </Button>
          </Box>
        </Box>
        <ConfirmResetPassword
          openCRP={isConfrimReset}
          closeCRP={closeConfirmReset}
          backgroundCrp={bgConfirmReset}
        />
      </Box>
    </>
  );
}
