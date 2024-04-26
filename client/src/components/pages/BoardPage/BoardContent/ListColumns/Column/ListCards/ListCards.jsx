import { Box, Stack } from "@mui/material";
import React from "react";
import TrelloCard from "./Card/TrelloCard";

function ListCards({cards}) {

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
        {cards?.map(card =>  <TrelloCard key={card._id} card={card}/>
        )}
      </Stack>

    </Box>
  );
}

export default ListCards;
