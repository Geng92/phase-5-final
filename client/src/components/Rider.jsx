import React from 'react'

export default function Rider({ rider, onClickRider }) {
    const {name, instagram, image, city, frame, bio, age, professional } = rider

    const handleClick = () => {
        onClickRider(rider);
    }

  return (
    <div class="w-screen bg-red-200 border border-3 border-black">
        
        <div>
        {name}
        </div>
        <div>
        {instagram}
        </div>

        <img src={image}/>
        <label >
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
        </label>
    </div>
  )
}