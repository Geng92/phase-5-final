import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserCommentGallery from './UserCommentGallery'
import UserEditPostForm from './UserEditPostForm'
import UserPostForm from './UserPostForm'
import UserPostsGallery from './UserPostsGallery'
import UserProfile from './UserProfile'

export default function UserContainer({ user, setUser, userPosts, setPosts }) {
    // const [ user, setUser ] = useState({})
    // const [ posts, setPosts ] = useState([])
    const [ postToEdit, setPostToEdit ] = useState([]) 
    // // const [ userComments, setUserComments ] = useState([])
    // // const [ combinedData, setCombinedData] = useState([])
    // const navigate = useNavigate();
    
    // const userPosts = posts.filter((post) => post.rider_id == user.id )
    // useEffect(() => {
    //     const currentRider = sessionStorage.getItem("user_id")
    //     if (currentRider == null){
    //         navigate("/login")
    //     }else{
    //         fetch(`/riders/${currentRider}`)
    //         .then((res) => res.json())
    //         .then((user) => setUser(user))
    //     }
    // },[posts])

    const deletePost = (id) => {
        fetch(`/posts/${id}`, {
          method: 'DELETE'
        })
        .then((res) => {
            if (res.ok) {
                setPosts((posts) =>
                posts.filter((post) => post.id !== id)
                )
            }
      })
    }

 
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
    
    const onNewPost = (newPost) => {
        setPosts([...userPosts, newPost])
        setUser({...user, posts: [...userPosts, newPost]})
    }

    const onEditPost = (postToEdit) => {
        setPostToEdit(postToEdit)
    };

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



  return (
    <div>
        <UserProfile  
            user ={user} 
        />
        <UserPostForm 
            user ={user} 
            userPosts={userPosts} 
            onNewPost={onNewPost} 
        />
        <UserEditPostForm 
            postToEdit={postToEdit}
            onUpdatePost={onUpdatePost}
        />
        <UserPostsGallery 
            user={user}
            posts={userPosts}
            setPosts={setPosts}
            onEditPost={onEditPost}
            deletePost={deletePost} 
        />
        <UserCommentGallery 
            user={user}
        />
    </div>
  )
}