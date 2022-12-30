import React from 'react'
import PostsGallery from './PostsGallery'

export default function PostsContainer({ posts }) {

  return (
    <div>
        PostsContainer
        <PostsGallery posts={posts} />
    </div>
  )
}