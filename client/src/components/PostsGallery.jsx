import React from 'react'
import Post from './Post'

export default function PostsGallery({ posts }) {
    
    const postCards = posts.map((post) => 
        <Post 
            key={post.id}
            id={post.id}
            post={post}
        />
    )

  return (
    <div>
        PostsGallery
        {postCards}
    </div>
  )
}