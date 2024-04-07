import React from 'react'
import BoardCard from './BoardCard';
import { Box, Button, Stack } from '@mui/material';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { generateFakeCardData } from '../../../../getFakeData';
const BoardList = ({title}) => {
  const [cardData, setCardData] = useState(generateFakeCardData(0))
  const handleAddCard = (data) => {
    setCardData([
      ...cardData,
      data
    ])
  }
  return (
    <Box width= "15%" minWidth="15%">
    <h4>{title}</h4>
    <Stack spacing = {2}>
      {cardData.map(card => {
        return <BoardCard text={card.text} key = {card.text}/>
      })}
    </Stack>
    <Button onClick={()=>handleAddCard({
         text: faker.lorem.sentence({ min: 4, max: 8 }) 
    })}>
      Add card
    </Button>
    </Box>
  )
}
export default BoardList
