import React from 'react'
import Navbar from '../../components/components/Navbar'
import UserWidget from '../../widgets/UserWidget'
import { Box, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import MyPostWidgets from '../../widgets/MyPostWidgets'
import PostsWidet from '../../widgets/PostsWidet'
import AdvertWidget from '../../widgets/AdvertWidget'
import FriendsWidget from '../../widgets/FriendsWidget'

const HomePage = () => {
  const bigScreen = useMediaQuery("(min-width: 1000px)")
  const {_id, picturePath} = useSelector(state => state.user)
  const user = useSelector(state => state.user)


  return (
    <div>
    <Navbar></Navbar>
    <Box width="100%" padding="2rem 6%" display={bigScreen? "flex": "block"} gap="0.5rem" justifyContent="space-between">
     {/* user widget */}
      <Box flexBasis={bigScreen && "26%"}>
        <UserWidget userId={_id} picturePath={picturePath}></UserWidget> 
      </Box>

      {/* post section */}
      <Box flexBasis={bigScreen && "42%"} mt={!bigScreen && "2rem"}>
        <MyPostWidgets picturePath={picturePath}></MyPostWidgets>
        <PostsWidet userId={_id} isProfile={false}></PostsWidet>
      </Box>

      {/* rightbar */}
      
      {bigScreen && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendsWidget userId={_id}/>
          </Box>
        )}

    </Box>
   
    </div>
  )
}

export default HomePage