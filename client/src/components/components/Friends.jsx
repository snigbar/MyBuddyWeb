import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FlexBetween from '../FlexBetween'
import UserImage from '../../widgets/UserImage'
import { Box, IconButton, Typography } from '@mui/material'
import { PersonAddOutlined, PersonRemove } from '@mui/icons-material'
import { useTheme } from '@emotion/react'
import { setFriends } from '../../state/AuthSlice'

const Friends = ({ friendId, name, subtitle, userPicturePath }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(state => state.token)
    const {_id} = useSelector(state => state.user)
    const friends = useSelector(state => state.user.friends)
    
  const { palette } = useTheme();
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const isFriend = friends.find((friend) => friend._id === friendId);
  const patchFriend = async () => {
    const response = await fetch(
      `https://my-buddy-web.vercel.app/users/${_id}/${friendId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    dispatch(setFriends({ friends: data }));
    }

  return (
    <FlexBetween>
        <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size='55px'></UserImage>

        <Box onClick={() =>{
        navigate(`/profile/${friendId}`);
        navigate(0)
        }}
        >
        <Typography color={main} variant='h5' fontWeight="500" sx={{"&:hover": {
            color: palette.primary.light,
            cursor: "pointer"
        }}}> 
            {name}
        </Typography>
        <Typography color={medium} fontSize="0.75rem">
            {subtitle}
        </Typography>
        </Box>
        </FlexBetween>

       {friendId !== _id && 
       <IconButton onClick={()=> patchFriend()}>
        { isFriend? <PersonRemove sx={{color: primaryDark}}></PersonRemove>:<PersonAddOutlined sx={{color: primaryDark}}></PersonAddOutlined>}
        </IconButton>}
    </FlexBetween>
  )
}

export default Friends