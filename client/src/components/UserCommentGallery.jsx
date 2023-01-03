import React from 'react'
import Comment from './Comment'

export default function UserCommentGallery({ user }) {
  
  const { comments } = user;


  const userCommentsCards = comments?.map((comment) => 
    <Comment 
      key={comment.id}
      id={comment.id}
      comment={comment}
    />
  )
  return (
    <div>
      UserCommentGallery
      {userCommentsCards}  
    </div>
  )
}

