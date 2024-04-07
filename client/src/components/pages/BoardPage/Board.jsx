import Navbar from "../../Navbar";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import * as style from "./Styled";
import BoardList from "./BoardComponents/BoardList";
import { Container, Stack } from "@mui/material";
import { connect } from "react-redux";
import { faker } from "@faker-js/faker";
import { generateFakeList } from "../../../getFakeData";
import { Button,Box } from "@mui/material";
const Board = (props) => {
  const [listData, setListData] = useState(generateFakeList(3));
  const handleAddList = (data) => {
    setListData([
      ...listData,
      data
    ])
  }
  return (
    <Box  height = "100vh">
      <Navbar />
      <Box overflow="auto" height="100%">

      <Stack direction={"row"} spacing={2} mt="3.5rem" >
        {listData.map((list) => {
          return <BoardList title={list.title} key={list.title} />;
        })}
        <Box>
        <Button
          onClick={() =>
            handleAddList({
                title: faker.music.songName()
            })
          }
        >
          Add list
        </Button>
        </Box>

      </Stack>
      </Box>

    </Box>
  );
};

export default Board;
