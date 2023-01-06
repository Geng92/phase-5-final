import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PostsGallery from './PostsGallery'

export default function PostsContainer({ user, posts, setPosts, refresh, setIsLogged }) {
  // const [ posts, setPosts ] = useState([])
  // const [ userAdmin, setUserAdmin ] = useState([])
  const [ postToEdit, setPostToEdit ] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const currentRider = sessionStorage.getItem("user_id")
    if (currentRider == null){
        setIsLogged(false)
        navigate("/login")
        refresh()
    }
    else{
      fetch(`/posts`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
      setIsLogged(true)
    }
  },[]);

  // useEffect(() => {
  //   const currentRider = sessionStorage.getItem("user_id")
  //   if (currentRider == null){
  //       navigate("/login")
  //   }
  //   else{
  //     fetch(`/riders/${currentRider}`)
  //     .then((res) => res.json())
  //     .then((user) => setUserAdmin(user))
  //   }
  // },[]);

  const onUpdatePost = (updatedPost) => {
    setPosts(posts => posts.map(originalPost => {
      if (originalPost.id === updatedPost.id) {
        return updatedPost;
      } 
      else {
        return originalPost;
      }
     })
    )
    setPostToEdit(null);
  };

  const onEditPost = (postToEdit) => {
    setPostToEdit(postToEdit)
  };

  return (
    <div>
        <PostsGallery
          user={user} 
          posts={posts}
          setPosts={setPosts} 
          onEditPost={onEditPost}
          onUpdatePost={onUpdatePost} 
        />
    </div>
  )
}