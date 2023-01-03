import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PostsGallery from './PostsGallery'

export default function PostsContainer() {
  const [ posts, setPosts ] = useState([])
  const [ userAdmin, setUserAdmin ] = useState([])
  const navigate = useNavigate();

  const { admin, id } = userAdmin
  
  useEffect(() => {
    const currentRider = sessionStorage.getItem("user_id")
    if (currentRider == null){
        navigate("/login")
    }else{
      fetch(`/posts`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
    }
  },[setPosts]);

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

  return (
    <div>
        PostsContainer
        <PostsGallery posts={posts} />
    </div>
  )
}