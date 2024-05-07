import React, { useEffect } from "react";
import IndexNav from "../../IndexNav";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Content,
  LeftSide,
  RightSide,
  LeftWrapper,
  Title,
  Text,
  Button,
  SvgItem,
} from "./Styled";

const Index = () => {
  let history = useNavigate();
  useEffect(() => {
    document.title = "Trollo"
  }, [])
  return (
    <>
      <IndexNav />
      <Container>
        <Content>
          <LeftSide>
            <LeftWrapper>
              <Title>Trollo helps teams move work forward.</Title>
              <Text>
                Collaborate, never teamworks. How to pass PDM A+ ?
                Use Trollo
              </Text>
              <Button onClick={() => history.push("/register")}>
                Sign up - it free
              </Button>
            </LeftWrapper>
          </LeftSide>
          <RightSide>
            <SvgItem src="https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=1200&fm=webp" />
          </RightSide>
        </Content>
      </Container>
    </>
  );
};

export default Index;