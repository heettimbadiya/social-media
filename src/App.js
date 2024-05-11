import { Box, useTheme } from '@mui/material'
import React from 'react'
import SignUp from './components/ragistration/SignUp'

const App = () => {
  const theme = useTheme()
  return (
    <Box>
      <SignUp />
    </Box>
  )
}

export default App
