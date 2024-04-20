import Navbar from "../../Navbar";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import * as style from "./Styled";
import BoardList from "./BoardComponents/BoardList";
import { List, Stack } from "@mui/material";
import { connect } from "react-redux";
import { faker } from "@faker-js/faker";
import { generateFakeList } from "../../../getFakeData";
import { Button,Box } from "@mui/material";
import { Container,ListContainer } from "./Styled";
const Board = (props) => {

  return (
    <Box  height = {'100vh' - Navbar.height} width='100%'>
      <Navbar />
      <Box overflow="auto" >
          
      </Box>

    </Box>
  );
};

export default Board;
