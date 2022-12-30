import React, { useState, useEffect } from 'react'
import CommentForm from './CommentForm'
import CommentsGallery from './CommentsGallery'

export default function CommentsContainer() {
    const [ comments, setComments ] = useState([])

    useEffect(() => {
        fetch(`/comments`)
        .then((res) => res.json())
        .then((comments) => setComments(comments))
    },[])

    const handleAddComment = (newComment) => {
        setComments(comments => [...comments, newComment])
    }

    return (
    <div>
        CommentsContainer
        <CommentForm 
            onAddComment={handleAddComment} 
        />
        <CommentsGallery 
            comments={comments} 
        />
    </div>
  )
}