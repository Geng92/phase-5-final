import React from 'react'
import Post from './Post'

export default function PostsGallery({ posts, user, setPosts, onUpdatePost, onEditPost }) {
    
    const postCards = posts.map((post) => 
        <Post 
            key={post.id}
            id={post.id}
            post={post}
            user={user}
            setPosts={setPosts}
            onUpdatePost={onUpdatePost}
            onEditPost={onEditPost}
        />
    )

  return (
    <div class="text-center">
        Latest Posts
        {postCards}
    </div>
  )
}