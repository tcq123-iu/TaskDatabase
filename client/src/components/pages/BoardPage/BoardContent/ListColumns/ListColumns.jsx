import React from 'react'
import Column from './Column/Column'
import { Box, useTheme } from '@mui/material'
import AddList from './AddList'
function ListColumns() {
  return (
    <Box sx={{
        display: 'flex',
        width: '100%',
        bgcolor: 'white',
        gap: 1, 
      }} >
        <Column title={"hahaha"} />

        <AddList/>
      </Box>
  )
}

export default ListColumns
