import React from 'react'
import Post from './Post'

export default function UserPostGallery({ user }) {
  // const { thumbnail, clip, filmed_by, rider_id, location_id, date, likes } = userPosts
 
  const { posts } = user
  
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