import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import { Container, Wrapper, Title, Board, AddBoard } from "./Styled";
import { useNavigate } from 'react-router-dom';
import CreateBoard from "../../../modals/CreateBoadModal/CreateBoard";
import { Button } from "@mui/material";
import { useDispatch } from 'react-redux'
import {test } from "../../../Redux/Slices/userSlice";
import { useSelector } from 'react-redux'
const HomePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //const selector = useSelector()
    const [openModal, setOpenModal] = useState(false);
    const handleModalClose = () => {
        setOpenModal(false);
      };
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <Title>Your Boards</Title>
                <AddBoard onClick={() => setOpenModal(true)}>
                    Create new board
                </AddBoard>
                <Button onClick={() => dispatch(test("concacccccc"))}>
                    Test
                </Button>
            </Wrapper>
        </Container>
  )
}

export default HomePage
