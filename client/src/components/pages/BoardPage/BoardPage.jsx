import Navbar from "../../Navbar";
import React from "react";
import { Container } from "./Styled";
import { useTheme } from "@mui/material/styles";
import ListColumns from "./BoardContent/ListColumns/ListColumns";
const BoardPage = (props) => {
  const theme = useTheme();
  console.log(theme.appBarHeight);
  return (
    <Container>
      <Navbar />
      <ListColumns/>
    </Container>
  );
};
export default BoardPage;
