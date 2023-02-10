import React from "react";
import Header from "../Header/Header";
import Box from "@mui/material/Box";
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
}
