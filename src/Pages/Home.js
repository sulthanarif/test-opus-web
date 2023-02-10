import React from "react";
import Box from "@mui/material/Box";
import IuCard from '../Components/Card/ImportanUrgent/IuCard'
import CardCategory from "../Components/Card/CardCategory";
// import ImportantUrgentCard from "../Components/Card/ImportanUrgent/ImportantUrgentCard";
// import ImportantUrgentDisplay from "../Components/Card/ImportanUrgent/ImportantUrgentDisplay";

export default function Home() {
  return (
    <Box>
      <Box sx={{display: 'flex', justifyContent: 'center', gap: 10}}>
        {/* <ImportantUrgentCard />
        <ImportantUrgentDisplay /> */}
        <CardCategory />
        {/* <IuCard /> */}

      </Box>
    </Box>
  );
}
