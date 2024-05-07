import React, { useState } from "react";
import Navbar from "../../Navbar";
import { Container, Wrapper, Title, AddBoard } from "./Styled";

const HomePage = () => {
    const [setOpenModal] = useState(false);
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
