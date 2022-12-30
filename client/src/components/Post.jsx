import React from 'react'
import CommentsContainer from './CommentsContainer'


export default function Post({ post }) {
    const { thumbnail, clip, filmed_by, date, likes } = post
  
    return (
    <div>
        Post
        {thumbnail}
        {clip}
        {filmed_by}
        {date}
        {likes}
        <CommentsContainer />
    </div>
  )
}