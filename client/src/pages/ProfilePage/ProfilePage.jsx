import { Box, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/components/Navbar';
import UserWidget from '../../widgets/UserWidget';
import FriendsWidget from '../../widgets/FriendsWidget';
import MyPostWidgets from '../../widgets/MyPostWidgets';
import PostsWidet from '../../widgets/PostsWidet';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null)
  const {userId} = useParams()
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const bigScreen = useMediaQuery("(min-width:1000px)");

  const getUser = async () => {
    const response = await fetch(`https://my-buddy-web.vercel.app/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setProfile(data);
  };



  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
 

  if(!user) return null

  return (
    <Box>
    <Navbar />
    <Box
      width="100%"
      padding="2rem 6%"
      display={bigScreen ? "flex" : "block"}
      gap="2rem"
      justifyContent="center"
    >
      <Box flexBasis={bigScreen ? "26%" : undefined}>
        <UserWidget userId={userId} picturePath={profile?.picturePath} />
        <Box m="2rem 0" />
        <FriendsWidget userId={userId} />
      </Box>

      <Box
        flexBasis={bigScreen ? "42%" : undefined}
        mt={bigScreen ? undefined : "2rem"}
      >
        <MyPostWidgets picturePath={user.picturePath} />
        <Box m="2rem 0" />
        <PostsWidet userId={userId} isProfile={true}/>
      </Box>
    </Box>
  </Box>
  )
}

export default ProfilePage