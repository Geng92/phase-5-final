import React from 'react'

export default function UserProfile({ user }) {
  const { name, instagram, image, city, frame, bio, age, professional } = user
  return (
    <div>
      UserContainer
      {name}
      {instagram}
      {image}
      {city}
      {frame}
      {bio}
      {age}
      {professional}
    </div>
  )
}