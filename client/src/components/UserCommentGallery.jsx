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
    <div class="border border-2 shadow-lg rounded-lg">
      <label class="block text-center text-xl font-medium text-gray-700">
      Your Recent Comments
        </label>
      <div class="text-center">
      {userCommentsCards}  
      </div>
    </div>
  )
}

