import React from 'react'

export default function Comment({ comment }) {
    const { body } = comment

    return (
    <div>
        Comment
        {body}
        {/* add the rider_id  */}
    </div>
  )
}