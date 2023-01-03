import React from 'react'
import CommentsContainer from './CommentsContainer'


export default function Post({ post }) {
    const { thumbnail, clip, filmed_by, date, likes} = post
  
    // const postComments = comments?.map((comment) =>
    //   <CommentsContainer key={comment.id} id={comment.id} comment={comment}/>
    // )
    return (
    <div>
        Post
        {thumbnail}
        {clip}
        {filmed_by}
        {date}
        {likes}
        <CommentsContainer post={post}/>
    </div>
  )
}