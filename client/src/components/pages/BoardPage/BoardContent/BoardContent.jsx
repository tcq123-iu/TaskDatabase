import React from "react";
import ListColumns from "./ListColumns/ListColumns";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

function BoardContent() {
  return (
    <Box
      sx={{
        marginTop: "48px",
        width: "100%",
        p: 1,
      }}
    >
      <ListColumns/>
    </Box>
  );
}

export default BoardContent;
