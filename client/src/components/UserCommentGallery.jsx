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
      <label for="Recent Comments" class="block text-sm font-medium text-gray-700">
      Your Recent Comments
        </label>
      {userCommentsCards}  
    </div>
  )
}

