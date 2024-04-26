import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCardIcon from "@mui/icons-material/AddCard";
import ListCards from "./ListCards/ListCards";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const Column = ({ column }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: column._id, data: {...column} });


  const dndKitColumnStyle = {
    transform: CSS.Translate.toString(transform),
    transition,
  };
  return (
    <Box
        ref={setNodeRef}
        style={dndKitColumnStyle}
        {...attributes}
        {...listeners}  
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
          paddingLeft: "5px",
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
      <ListCards cards={column.cards} />

      {/* Footer */}
      <Button
        sx={{
          p: 1,
          marginLeft: "5px",
        }}
        onClick={() => {
          console.log("change card");
        }}
        startIcon={<AddCardIcon />}
      >
        Add card
      </Button>
    </Box>
  );
};
export default Column;
