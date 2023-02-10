import React from 'react'
import { Outlet } from 'react-router-dom';
import Box from "@mui/material/Box";

export default function AuthLayout() {
  return (
    <Box sx={{ backgroundColor: "#F3F2EF", height: "100%", py:6.5}}>
        <Outlet />      
    </Box>
  )
}
