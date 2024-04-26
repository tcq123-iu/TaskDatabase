import React from "react";
import Column from "./Column/Column";
import { Box, useTheme } from "@mui/material";
import AddList from "./AddList";
import { useSelector } from "react-redux";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
function ListColumns() {
  const currentBoardData = useSelector((s) => s.board.currentBoardData);
  return (
    <SortableContext items={currentBoardData.columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          bgcolor: "white",
          gap: 1,
        }}
      >
        {currentBoardData.columns.map((column) => (
          <Column key={column._id} column={column} />
        ))}
        <AddList />
      </Box>
    </SortableContext>
  );
}

export default ListColumns;
