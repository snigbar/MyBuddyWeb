import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../state/AuthSlice'
import SinglePostWidget from './SinglePostWidget'


const PostsWidet = ({userId, isProfile}) => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    const token = useSelector(state => state.token)


    const getPosts = async () => {
        const response = await fetch("http://localhost:5000/posts", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setPosts({ posts: data }));
      };
    
      const getUserPosts = async () => {
        const response = await fetch(
          `http://localhost:5000/posts/${userId}/posts`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        dispatch(setPosts({ posts: data }));
      };

      useEffect(() => {
        isProfile? getUserPosts() : getPosts()
      }, [isProfile])

  return (
    <>
    {posts.map(
      ({
        _id,
        userId,
        firstName,
        lastName,
        description,
        location,
        picturePath,
        userPicturePath,
        likes,
        comments,
      }) => (
        <SinglePostWidget
          key={_id}
          postId={_id}
          postUserId={userId}
          name={`${firstName} ${lastName}`}
          description={description}
          location={location}
          picturePath={picturePath}
          userPicturePath={userPicturePath}
          likes={likes}
          comments={comments}
        />
      )
    )}
  </>
  )
}

export default PostsWidet