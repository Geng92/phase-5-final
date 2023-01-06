import React from 'react'

export default function Comment({ comment }) {
    const { body, likes } = comment

    return (
    <div class="flex flex-row border-2 mt-1 border-slate-400 bg-gray-200 rounded-md">
        <div class="w-full">
        {body}
        </div>
        <div class=" justify-end">
         👍.{likes} 
        </div>
        {/* add the rider_id  */}
    </div>
  )
}