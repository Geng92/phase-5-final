import React, { useState, useEffect } from 'react'
import CommentForm from './CommentForm'
import CommentsGallery from './CommentsGallery'

export default function CommentsContainer({ post }) {
    
    // const { body } = 
    const [ postComments, setPostComments ] = useState([])

    // const { comments } = post
    useEffect(() => {
        fetch(`/comments`)
        .then((res) => res.json())
        .then((comments) => setPostComments(comments))
    },[])

    const handleAddComment = (newPostComment) => {
        setPostComments(postComments => [...postComments, newPostComment])
    }

    return (
    <div>
        <CommentForm
            post={post} 
            onAddComment={handleAddComment} 
        />
        <CommentsGallery 
          post={post}
          postComments={postComments}   
        />
    </div>
  )
}