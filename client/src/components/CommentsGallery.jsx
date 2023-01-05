import React from 'react'
import Comment from './Comment'

export default function CommentsGallery({ 
    post, 
    user, 
    comments, 
    setComments 
  }) 
{    
    const postComments = post.comments?.map((comment) =>
      <Comment
        key={comment.id} 
        id={comment.id} 
        comment={comment}
        setComments={setComments}
       />
    )

    return (
    <div>
        CommentsGallery
        {postComments}
    </div>
  )
}
