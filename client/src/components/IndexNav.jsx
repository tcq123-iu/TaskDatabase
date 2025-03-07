import React from "react";
import { useNavigate} from "react-router-dom";
import styled from "styled-components";
import { lg } from "../BreakPoints";
import trelloLogo from "../Images/trello-logo.svg";
const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 100;

  ${lg({
    justifyContent: "space-between",    
  })}
`;

const Icon = styled.img`
  margin-left: 1rem;
  ${lg({
    marginLeft: "0",
  })}
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;


const Button = styled.button`
  background-color: #0065ff;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  cursor: pointer;  
  &:hover {
    background-color: #0952cc;
  }
`;

const IndexNav = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <Container>
      <Icon src={trelloLogo} />
      <RightSide>
        <Button onClick={handleLogin}>Login </Button>
        <Button onClick={handleSignup}>Sign up</Button>
      </RightSide>
    </Container>
  );
};

export default IndexNav;