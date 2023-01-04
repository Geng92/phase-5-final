import React from 'react'
import Post from './Post'
import UserPost from './UserPost';

export default function UserPostGallery({ user, posts, setPosts, deletePost, onUpdatePost, onEditPost }) {
 
  

  // const deletePost = () => {
  //   fetch(`/posts/${id}`, {
  //     method: 'DELETE'
  //   })
  //   .then((res) => res.json())
  // }
  
  const userPostCards = user.posts.map((post) => 
    <Post 
      key={post.id} 
      id={post.id} 
      post={post}
      user={user}
      setPosts={setPosts}
      deletePost={deletePost}
      onUpdatePost={onUpdatePost}
      onEditPost={onEditPost} 
    />
  )

  return (
    <div>
      UserContainer
      {userPostCards}
    </div>
  )
}