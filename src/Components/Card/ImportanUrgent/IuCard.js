import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// component page
import IuShow from "./IuShow";

// MUI Component
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ImportantUrgentAdd from "./ImportantUrgentAdd";

export default function IuCard() {
  const [iuForm, setIuForm] = useState(false);
  const push = useNavigate();

  const clickAdd = () => {
    setIuForm(true);
  };

  const backForm = () => {
    setIuForm(false);
  };

  return (
    <Card
      sx={{
        backgroundColor: "card.main1",
        borderRadius: "20px",
        height: "auto",
        width: "280px",
      }}
    >
      <CardContent>
        {iuForm ? (
          <ImportantUrgentAdd event={backForm} />
        ) : (
          <IuShow
          event={() => clickAdd()}
          btnColor="card.main1"
          categoryName="Important Urgent"
        />
        )}
      </CardContent>
    </Card>
  );
}
