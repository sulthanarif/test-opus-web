import React from "react";
import Header from "../Components/Header/Header";
import Box from "@mui/material/Box";
import ImportantUrgentCard from "../Components/Card/importan-urgent/ImportantUrgentCard";
import ImportantUrgentAdd from "../Components/Card/importan-urgent/ImportantUrgentAdd";


export default function Home() {
  return (
    <div>
      <Header />
      <Box sx={{display: 'flex', justifyContent: 'center', gap: 10}}>
        <ImportantUrgentCard />
        <ImportantUrgentAdd />
      </Box>
    </div>
  );
}
