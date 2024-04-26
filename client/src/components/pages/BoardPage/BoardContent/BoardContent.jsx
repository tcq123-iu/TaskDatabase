import React from "react";
import ListColumns from "./ListColumns/ListColumns";
import { Box } from "@mui/material";
import { DndContext } from "@dnd-kit/core";
function BoardContent() {
    const handleDragEnd = (event) => {
        console.log('handleDragEnd', event)
    }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box
        sx={{
          marginTop: "48px",
          width: "100%",
          p: 1,
        }}
      >
        <ListColumns />
      </Box>
    </DndContext>
  );
}

export default BoardContent;
