import React from 'react'

export default function UserProfile({ user }) {
  const { name, instagram, image, city, frame, bio, age, professional } = user
  return (
    <div class="bg-slate-300">
      <div>
        {name}
      </div>
      <div>
      {instagram}
      </div>
      <img src={image}/>
      <div>
      {city}
      </div>
      <div>
      {frame}
      </div>
      <div>
      {bio}
      </div>
      <div>
      {age}
      </div>
      <div>
      {professional}
      </div>
    </div>
  )
}