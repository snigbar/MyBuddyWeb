import { useTheme } from '@emotion/react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Form from './Form'

const LoginPage = () => {
  const theme = useTheme()
  const bigScreen = useMediaQuery("(min-width: 1000px)")
  return (
    <Box>
      <Box textAlign="center" width="100%" p="1rem 6%">
        <Typography variant='h1' fontSize='32px' fontWeight="bold" color="primary">
          MyBuddyWeb
        </Typography>
      </Box>

      <Box width={bigScreen ? "50%" : "93.33%"} p="1rem 6%" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
      <Form></Form>
      </Box>
    </Box>
  )
}

export default LoginPage