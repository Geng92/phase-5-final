import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserCommentGallery from './UserCommentGallery'
import UserEditPostForm from './UserEditPostForm'
import UserPostForm from './UserPostForm'
import UserPostsGallery from './UserPostsGallery'
import UserProfile from './UserProfile'

export default function UserContainer({ 
    user, 
    setUser, 
    userPosts, 
    setPosts,
    setIsLogged,
    refresh
  }) 
{
    const [ postToEdit, setPostToEdit ] = useState([]) 
    const navigate = useNavigate();
    
    // const userPosts = posts.filter((post) => post.rider_id == user.id )
    useEffect(() => {
        const currentRider = sessionStorage.getItem("user_id")
        if (currentRider == null){
            setIsLogged(false)
            navigate("/login")
            refresh()
        }
        else{
          fetch(`/riders/${currentRider}`)
            .then((res) => res.json())
            .then((user) => setUser(user))
            setIsLogged(true)
        }
    },[])

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
    <div >
      <div class="flex flex-row">
        <div class="w-1/3">
        <UserProfile  
            user ={user} 
            />
          <UserCommentGallery 
              user={user}
          />
        </div>

        <div class="w-2/3"> 
        <UserPostForm 
            user ={user} 
            userPosts={userPosts} 
            onNewPost={onNewPost} 
            />
        
      
        {/* <div class="justify-end columns-1 border-gray-200 ">
        <UserEditPostForm 
            postToEdit={postToEdit}
            onUpdatePost={onUpdatePost}
            />
        </div> */}
        <UserPostsGallery 
            user={user}
            posts={userPosts}
            setPosts={setPosts}
            onEditPost={onEditPost}
            deletePost={deletePost} 
            />
        </div>
        </div>
    </div>
  )
}