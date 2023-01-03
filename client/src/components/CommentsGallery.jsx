import React from 'react'
import Comment from './Comment'

export default function CommentsGallery( { post } ) {
    
    // add a slice to show the most recent or organize in backend
    // const commentCards = comments?.map((comment) => 
    //     <Comment 
    //         key={comment.id}
    //         id={comment.id}
    //         comment={comment}
    //     />
    // )

    const postComments = post.comments?.map((comment) =>
      <Comment
       key={comment.id} 
       id={comment.id} 
       comment={comment}
       />
    )

    return (
    <div>
        CommentsGallery
        {postComments}
    </div>
  )
}
