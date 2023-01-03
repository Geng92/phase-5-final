import React from 'react'
import Post from './Post'

export default function UserPostGallery({ user }) {
 
  const { posts } = user;
  
  const userPostCards = posts?.map((post) => 
    <Post 
      key={post.id} 
      id={post.id} 
      post={post} 
    />
  )

  return (
    <div>
      UserContainer
      {userPostCards}
    </div>
  )
}