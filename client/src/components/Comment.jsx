import React from 'react'

export default function Comment({ comment }) {
    const { body, likes } = comment

    return (
    <div>
        {body}
        {likes}
        {/* add the rider_id  */}
    </div>
  )
}