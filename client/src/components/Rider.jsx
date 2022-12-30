import React from 'react'

export default function Rider({ rider, onClickRider }) {
    const {name, instagram, image, city, frame, bio, age, professional } = rider

    const handleClick = () => {
        onClickRider(rider);
    }

  return (
    <div>
        Rider
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