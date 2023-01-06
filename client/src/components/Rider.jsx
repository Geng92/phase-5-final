import React from 'react'

export default function Rider({ rider, onClickRider }) {
    const {name, instagram, image, city, frame, bio, age, professional } = rider

    const handleClick = () => {
        onClickRider(rider);
    }

  return (
    <div class="bg-blue-200 mt-2 px-2 py-2 border border-3 border-black rounded-lg">      
        <div class="text-center text-xl font-bold">
          {name}
        </div>
          <img class="border border-indigo-100 shadow-lg round object-none object-center bg-black-300 w-full h-60" src={image} alt="profile"/>
        <label >
        <div class="bg-gray-200 py-2 border-2 border-zinc-800 mx-2 text-center text-md text-white-600 rounded-lg">
          {city}
        </div>
        <div class="bg-gray-200 py-2 my-2 border-2 border-zinc-800 mx-2 text-center text-md text-white-600 rounded-lg">
          {frame}
        </div>
        <div class="bg-gray-200 py-2 my-2 border-2 border-zinc-800 mx-2 text-center text-md text-white-600 rounded-lg">
          {bio}
        </div>
        <div class="bg-gray-200 py-2 my-2 border-2 border-zinc-800 mx-2 text-center text-md text-white-600 rounded-lg">
          {age}
        </div>
        <div class="bg-gray-200 py-2 my-2 border-2 border-zinc-800 mx-2 text-center text-md text-white-600 rounded-lg">
          {instagram}
        </div>
        </label>
    </div>
  )
}