import React from "react";
import ListColumns from "./ListColumns/ListColumns";
import { Box } from "@mui/material";
import { DndContext } from "@dnd-kit/core";
import { mapOrder } from "../../../../utils/sort";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentBoardData } from "../../../../Redux/Slices/boardSlice";

function BoardContent() {
    const dispatch = useDispatch()
  const currentBoardData = useSelector((s) => s.board.currentBoardData);

  const orderedColumns = mapOrder(
    currentBoardData.columns,
    currentBoardData.columnOrderIds,
    '_id'
  );
  
  const handleDragEnd = (event) => {
    console.log("handleDragEnd", event);
    // dispatch(updateCurrentBoardData(orderedColumns));
  };


  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box
        sx={{
          marginTop: "48px",
          width: "100%",
          p: 1,
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  );
}

export default BoardContent;
