import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ImportantUrgentAdd from "./ImportanUrgent/ImportantUrgentAdd";
import CardShow from "./CardShow";
import ImportantNotUrgentAdd from "./important-not-urgent/ImportantNotUrgentAdd";
import NotImportantUrgent from "./not-important-urgent/NotImportantUrgent";
import NotImportantNotUrgent from "./not-important-not-urgent/NotImportantNotUrgent";

export default function CardCategory() {
  const [category, setCategory] = useState([]);
  const [iuForm, setIuForm] = useState(false);
  const [inuForm, setInuForm] = useState(false);
  const [niuForm, setNiuForm] = useState(false);
  const [ninuForm, setNinuForm] = useState(false);
  const tokenAuth = localStorage.getItem("token");

  const clickAdd = (data) => {
    if (data.name === "Important Urgent") {
      setIuForm(true);
    } else if (data.name === "Important Not Urgent") {
      setInuForm(true);
    } else if (data.name === "Not Important Urgent") {
      setNiuForm(true);
    } else {
      setNinuForm(true);
    }
  };

  const backForm = (data) => {
    if (data.name === "Important Urgent") {
      setIuForm(false);
    } else if (data.name === "Important Not Urgent") {
      setInuForm(false);
    } else if (data.name === "Not Important Urgent") {
      setNiuForm(false);
    } else {
      setNinuForm(false);
    }
  };

  const getCategory = async () => {
    try {
      const resCategory = await axios.get(
        "https://backend-opus.vercel.app/category",
        {
          headers: {
            token: `${tokenAuth}`,
          },
        }
      );
      return setCategory(resCategory.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategory();
  }, [tokenAuth]);

  return (
    <Box
      sx={{
        my: 5,
        display: "flex",
        justifyContent: "center",
        gap: 2,
      }}
    >
      {category.map((data, index) => (
        <Card
          key={index}
          sx={{
            backgroundColor:
              data.name === "Important Urgent"
                ? "card.main1"
                : data.name === "Important Not Urgent"
                ? "card.main2"
                : data.name === "Not Important Urgent"
                ? "card.main3"
                : "card.main4",
            borderRadius: "20px",
            height: "auto",
            width: "280px",
          }}
        >
          <CardContent>
            {iuForm && data.name === "Important Urgent" ? (
              <ImportantUrgentAdd event={() => backForm(data)} />
            ) : inuForm && data.name === "Important Not Urgent" ? (
              <ImportantNotUrgentAdd event={() => backForm(data)} />
            ) : niuForm && data.name === "Not Important Urgent" ? (
              <NotImportantUrgent event={() => backForm(data)} />
            ) : ninuForm && data.name === "Not Important Not Urgent" ? (
              <NotImportantNotUrgent event={() => backForm(data)} />
            ) : (
              <CardShow
                nameCategory={data.name}
                btnColor={
                  data.name === "Important Urgent"
                    ? "card.main1"
                    : data.name === "Important Not Urgent"
                    ? "card.main2"
                    : data.name === "Not Important Urgent"
                    ? "card.main3"
                    : "card.main4"
                }
                event={() => clickAdd(data)} />
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
