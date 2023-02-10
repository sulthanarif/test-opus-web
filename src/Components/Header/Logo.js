import React from "react";
import Box from "@mui/material/Box";
import logoOpus from "../../assets/logo-opus.svg";

export default function Logo() {
  return (
    <Box>
      <img src={logoOpus} alt="logo" style={{width: "120px"}} />
    </Box>
  );
}
