import React, { useState, useEffect } from 'react'
import CommentForm from './CommentForm'
import CommentsGallery from './CommentsGallery'

export default function CommentsContainer({ user, post, setPosts }) {
    
    // const { body } = 
    // const [ postComments, setPostComments ] = useState([])
    // const { comments } = post
    // const { comments } = post
    // useEffect(() => {
    //     fetch(`/comments`)
    //     .then((res) => res.json())
    //     .then((comments) => setPostComments(comments))
    // },[])

    const handleAddComment = (newPostComment) => {
        setPosts([...post, {comments: [...post.comments, newPostComment]}])
    }

    return (
    <div>
        <CommentForm
            post={post}
            user={user} 
            addComment={handleAddComment} 
        />
        <CommentsGallery 
          post={post}   
        />
    </div>
  )
}