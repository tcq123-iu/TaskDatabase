import Navbar from "../../Navbar";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import BoardContent from "./BoardContent/BoardContent";
import { Box } from "@mui/material";
import mockData from "../../../apis/mockData"

const BoardPage = (props) => {
  const theme = useTheme();
  const [currentBoard, setcurrentBoard] = useState(mockData[0]?._id);
  const handleBoardSelect= (id) =>{
    setcurrentBoard(id);
  } 
  return (
    <Box sx={{
      margin:0,
    }}>
      <Navbar currentBoard={currentBoard}/>
      <BoardContent currentBoard={currentBoard}/>
    </Box>
  );
};
export default BoardPage;
