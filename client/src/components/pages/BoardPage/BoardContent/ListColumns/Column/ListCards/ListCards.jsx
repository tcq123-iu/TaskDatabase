import { Box, Stack } from "@mui/material";
import React from "react";
import TrelloCard from "./Card/TrelloCard";

function ListCards({cardData}) {
  return (
    <Box
      sx={{
        maxHeight: (theme) => "calc(100vh - 48px - 100px)",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <Stack
        sx={{
          gap: 1,
        }}
      >
        {cardData.map((card) => {
          return <TrelloCard text={card.text} key={card.text} />;
        })}
      </Stack>
    </Box>
  );
}

export default ListCards;
