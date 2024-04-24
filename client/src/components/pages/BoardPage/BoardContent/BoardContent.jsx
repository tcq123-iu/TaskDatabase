import React from "react";
import ListColumns from "./ListColumns/ListColumns";
import { Box } from "@mui/material";
function BoardContent() {
  return (
    <Box sx={{
        marginTop: '48px',
        width:'100%',
    }}>
      <ListColumns />
    </Box>
  );
}

export default BoardContent;
