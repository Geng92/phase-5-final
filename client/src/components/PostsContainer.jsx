import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PostsGallery from './PostsGallery'

export default function PostsContainer() {
  const [ posts, setPosts ] = useState([])
  const [ userAdmin, setUserAdmin ] = useState([])
  const [ postToEdit, setPostToEdit ] = useState([])
  const navigate = useNavigate();

  
  useEffect(() => {
    const currentRider = sessionStorage.getItem("user_id")
    if (currentRider == null){
        navigate("/login")
    }else{
      fetch(`/posts`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
    }
  },[navigate]);

  useEffect(() => {
    const currentRider = sessionStorage.getItem("user_id")
    if (currentRider == null){
        navigate("/login")
    }else{
        fetch(`/riders/${currentRider}`)
        .then((res) => res.json())
        .then((user) => setUserAdmin(user))
    }
  },[]);


  const onUpdatePost = (updatedPost) => {
    setPosts(posts => posts.map(originalPost => {
      if (originalPost.id === updatedPost.id) {
        return updatedPost;
      } else {
        return originalPost;
      }
    }))
    setPostToEdit(null);
  };

  const onEditPost = (postToEdit) => {
    setPostToEdit(postToEdit)
  };

  return (
    <div>
        PostsContainer
        <PostsGallery 
          posts={posts} 
          onEditPost={onEditPost}
          onUpdatePost={onUpdatePost} 
        />
    </div>
  )
}