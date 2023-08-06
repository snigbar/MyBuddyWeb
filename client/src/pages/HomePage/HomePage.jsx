import React from 'react'
import Navbar from '../../components/components/Navbar'
import UserWidget from '../../widgets/UserWidget'
import { Box, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const bigScreen = useMediaQuery("(min-width: 1000px)")
  const {_id, picturePath} = useSelector(state => state.user)
  const user = useSelector(state => state.user)
  console.log(user)

  return (
    <div>
    <Navbar></Navbar>
    <Box width="100%" padding="2rem 6%" display={bigScreen? "flex": "block"} gap="0.5rem" justifyContent="space-between">
      <Box flexBasis={bigScreen && "26%"}>
        <UserWidget userId={_id} picturePath={picturePath}></UserWidget> 
      </Box>
    </Box>
   
    </div>
  )
}

export default HomePage