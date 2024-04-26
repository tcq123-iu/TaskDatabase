import React from 'react'
import Column from './Column/Column'
import { Box, useTheme } from '@mui/material'
import AddList from './AddList'
import { useSelector } from 'react-redux';
function ListColumns() {
  const currentBoardData = useSelector((s) => s.board.currentBoardData);
  return (
    <Box sx={{
        display: 'flex',
        width: '100%',
        bgcolor: 'white',
        gap: 1, 
      }} >
        {currentBoardData.columns.map(column => <Column key={column._id} column = {column} />)}
        <AddList/>
      </Box>
  )
}

export default ListColumns
