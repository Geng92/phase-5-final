import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserCommentGallery from './UserCommentGallery'
import UserPostForm from './UserPostForm'
import UserPostsGallery from './UserPostsGallery'
import UserProfile from './UserProfile'

export default function UserContainer({ riders }) {
    const [ user, setUser ] = useState([])
    const [ userPosts, setUserPosts ] = useState([])
    const [ userComments, setUserComments ] = useState([])
    // const [ combinedData, setCombinedData] = useState([])
    const navigate = useNavigate();
    
    useEffect(() => {
        const currentRider = sessionStorage.getItem("user_id")
        if (currentRider == null){
            navigate("/login")
        }else{
            fetch(`/riders/${currentRider}`)
            .then((res) => res.json())
            .then((user) => setUser(user))
        }
    },[userPosts])

    useEffect(() => {
        fetch(`/posts`)
        .then((res) => res.json())
        .then((userPosts) => setUserPosts(userPosts))
    },[])

    useEffect(() => {
        fetch(`/comments`)
        .then((res) => res.json())
        .then((userComments) => setUserComments(userComments))
    })

    // useEffect(() => {
    //     Promise.all([
    //         fetch(`/posts`),
    //         fetch(`/comments`)
    //     ])
    //     .then(([resComments, resPosts]) =>
    //         Promise.all([resComments.json(), resPosts.json()])
    //     )
    //     .then(([dataPosts, dataComments]) => {
    //         setUserComments(dataComments);
    //         setUserPosts(dataPosts);
    //         setCombinedData(dataPosts.concat(dataComments))
    //     })
    // },[])

    const updatePosts = (newPost) => {
        setUserPosts([newPost, ...userPosts])
    }


  return (
    <div>
        UserContainer
        <UserProfile  user ={user} />
        <UserPostForm user={user} updatePosts={updatePosts} />
        <UserPostsGallery userPosts={userPosts} />
        <UserCommentGallery userComments={userComments} />
    </div>
  )
}