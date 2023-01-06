import React, { useState, useEffect } from 'react'
import CommentForm from './CommentForm'
import CommentsGallery from './CommentsGallery'

export default function CommentsContainer({ 
    user, 
    post, 
    comments, 
    setPosts, 
    setComments 
  }) 
{
    // const [ postComments, setPostComments ] = useState([])
    // const { comments } = post
    // useEffect(() => {
    //     fetch(`/comments`)
    //     .then((res) => res.json())
    //     .then((comments) => setPostComments(comments))
    // },[])
    const handleAddComment = (newComment) => {
        setComments([...comments, newComment])
        setPosts([...post.comments, {comments: [...post.comments, newComment]}])
    }

    return (
    <div class="text-center">
        <CommentForm
            post={post}
            user={user} 
            addComment={handleAddComment} 
        />
        <CommentsGallery 
          post={post}
          user={user}
          comments={comments}
          setComments={setComments}   
        />
    </div>
  )
}