import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import { Container, Wrapper, Title, Board, AddBoard } from "./Styled";
import { useNavigate } from 'react-router-dom';
import CreateBoard from "../../../modals/CreateBoadModal/CreateBoard";


const HomePage = () => {
    const navigate = useNavigate();
    
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

            </Wrapper>
        </Container>
  )
}

export default HomePage
