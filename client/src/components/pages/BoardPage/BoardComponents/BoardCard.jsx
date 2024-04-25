import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
const BoardCard = ({text}) => {
  return (
    <Card>
    <CardContent>
      <Typography >
        {text}
      </Typography>
    </CardContent>
  </Card>
)
}

export default BoardCard
