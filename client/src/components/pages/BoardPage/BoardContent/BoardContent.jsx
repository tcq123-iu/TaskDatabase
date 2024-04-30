import React, { useEffect, useState } from "react";
import ListColumns from "./ListColumns/ListColumns";
import { Box } from "@mui/material";
import { DndContext } from "@dnd-kit/core";
import { mapOrder } from "../../../../utils/sort";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentBoardData, updateCurrentColumnsOrder } from "../../../../Redux/Slices/boardSlice";
import { arrayMove } from "@dnd-kit/sortable";
function BoardContent() {
  const dispatch = useDispatch();
  const currentBoardData = useSelector((s) => s.board.currentBoardData);
  const [orderedColumns, setOrderedColumns] = useState([]);
  useEffect(() => {
    setOrderedColumns(
      mapOrder(currentBoardData.columns, currentBoardData.columnOrderIds, "_id")
    );
  }, [currentBoardData]);

  const handleDragEnd = (event) => {
    console.log("handleDragEnd", event);
    const { active, over } = event;

    if(!over) return

    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id);

      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);

      const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id);
      console.log("dndOrderedColumns: ", dndOrderedColumns);

      setOrderedColumns(dndOrderedColumns);
      dispatch(updateCurrentColumnsOrder(dndOrderedColumnsIds));
    }
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
