import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import { Container, Wrapper, Title, Board, AddBoard } from "./Styled";
import { useNavigate } from 'react-router-dom';
import CreateBoard from "../../../modals/CreateBoadModal/CreateBoard";


const HomePage = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <Title>Your Boards</Title>

            </Wrapper>
        </Container>
  )
}

export default HomePage
