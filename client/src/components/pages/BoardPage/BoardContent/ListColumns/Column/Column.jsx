import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCardIcon from "@mui/icons-material/AddCard";
import ListCards from "./ListCards/ListCards";
import { useState } from "react";
import {generateFakeCardData} from "../../../../../../getFakeData";
const Column = ({ column }) => {
    
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
            marginBottom: 1,
          }}
        >
          {column?.title}
        </Typography>
        <ExpandMoreIcon sx={{ cursor: "pointer" }}></ExpandMoreIcon>
      </Box>


      {/* Content */}
      <ListCards cards = {column.cards}/>

      {/* Footer */}
      <Button
        sx={{ p: 0.5 }}
        onClick={() =>  
            {console.log('change card')}
        }
        startIcon={<AddCardIcon />}
      >
        Add card
      </Button>
    </Box>
  );
};
export default Column;
