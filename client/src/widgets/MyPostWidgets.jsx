import { useTheme } from '@emotion/react';
import { Box, Button, Divider, IconButton, InputBase, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../state/AuthSlice';
import { WidgetWrapper } from './widgetWrapper';
import FlexBetween from '../components/FlexBetween';
import UserImage from './UserImage';
import Dropzone from 'react-dropzone';
import { EditOutlined } from '@mui/icons-material';
import { DeleteOutline } from '@mui/icons-material';
import { ImageOutlined } from '@mui/icons-material';
import { GifBoxOutlined } from '@mui/icons-material';
import { AttachFileOutlined } from '@mui/icons-material';
import { MicOutlined } from '@mui/icons-material';
import { MoreHorizOutlined } from '@mui/icons-material';


const MyPostWidgets = ({picturePath}) => {
    const dispatch = useDispatch();
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState(null);
    const [post, setPost] = useState("");
    const { palette } = useTheme();
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const mediumMain = palette.neutral.mediumMain;
    const medium = palette.neutral.medium;



    const handlePost = async() => {
      const formData = new FormData()
      formData.append("userId", _id)
      formData.append("description", post)
      if(image) {
      formData.append("picture", image)
      formData.append("picturePath", image.name)
      }

      const response =  await fetch ("https://my-buddy-web.vercel.app/posts", {
        method: "POST",
        headers: {Authorization: `Bearer ${token}`},
        body: formData
      })
      const posts = await response.json()
      dispatch(setPosts({posts}))
      setIsImage(false)
      setImage(null)
      setPost("")
    
    }
  return (
    <WidgetWrapper>
      <Box display="flex" gap="1.5rem">
      <UserImage image={picturePath}></UserImage>
      <InputBase 
      value={post}
      sx={{width: "100%"}}
      placeholder="What's on your mind...."
      onChange={(e) =>setPost(e.target.value)}
      ></InputBase>
      </Box>
      {
        isImage && <Box border={`1px solid ${medium}`} borderRadius="5px" mt="1rem" p="1rem">
          <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) => setImage(acceptedFiles[0]) }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <FlexBetween>
                      <Box
                        {...getRootProps()}
                        border={`2px dashed ${palette.primary.main}`}
                        p="1rem"
                        width="100%"
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      >
                        <input {...getInputProps()} />
                        {!image ? (
                          <p>Add picture</p>
                        ) : (
                          <FlexBetween>
                            <Typography>{image.name}</Typography>
                            <EditOutlined/>
                          </FlexBetween>
                        )}
                      </Box>
                      {
                        image && <IconButton onClick={() => setImage(null)} sx={{width: "15%"}}>
                          <DeleteOutline></DeleteOutline>
                        </IconButton>
                      }
                      </FlexBetween>
                    )}
                  </Dropzone>
        </Box>}

        <Divider sx={{margin: "1.25rem 0"}}></Divider>

        <FlexBetween>
        <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ "&:hover": { cursor: "pointer", color: medium } }}
          >
            Image
          </Typography>
        </FlexBetween>

        {isNonMobileScreens ? (
          <>
            <FlexBetween gap="0.25rem">
              <GifBoxOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Clip</Typography>
            </FlexBetween>

            <FlexBetween gap="0.25rem">
              <AttachFileOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Attachment</Typography>
            </FlexBetween>

            <FlexBetween gap="0.25rem">
              <MicOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Audio</Typography>
            </FlexBetween>
          </>
        ) : (
          <FlexBetween gap="0.25rem">
            <MoreHorizOutlined sx={{ color: mediumMain }} />
          </FlexBetween>
        )}

        <Button disabled={!post} onClick={handlePost} sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem",
          }}
        > POST </Button>

        </FlexBetween>

    </WidgetWrapper>
  )
}

export default MyPostWidgets