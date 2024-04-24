import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCardIcon from "@mui/icons-material/AddCard";
import ListCards from "./ListCards/ListCards";
import { useState } from "react";
import {generateFakeCardData} from "../../../../../../getFakeData";
const Column = ({ title }) => {
  const [cardData, setCardData] = useState(generateFakeCardData(0));
  const handleAddCard = (data) => {
    setCardData([...cardData, data]);
  };
  return (
    <Box
      sx={{
        minWidth: "300px",
        maxHeight: (theme) => "calc(100vh - 48px)",
        maxWidth: "300px",
        bgcolor: "#ccc",
        borderRadius: 3,
        padding: 1,
        height: "fit-content",
      }}
    >
      {/* Title */}
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
        <ExpandMoreIcon sx={{ cursor: "pointer" }}></ExpandMoreIcon>
      </Box>


      {/* Content */}
      <ListCards cardData={cardData}/>

      {/* Footer */}
      <Button
        sx={{ p: 0.5 }}
        onClick={() =>
          handleAddCard({
            text: faker.lorem.sentence({ min: 4, max: 8 }),
          })
        }
        startIcon={<AddCardIcon />}
      >
        Add card
      </Button>
    </Box>
  );
};
export default Column;
