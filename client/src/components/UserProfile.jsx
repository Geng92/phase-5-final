import React from 'react'

export default function UserProfile({ user }) {
  const { name, instagram, image, city, frame, bio, age, professional } = user
  return (
    <div>
      <div class="pt-2 border-t mt-3 w-full text-center font-bold text-xl text-gray-600">
        {name}
      </div>
      <img class="border border-indigo-100 shadow-lg round object-none object-center bg-black-300 w-full h-60" src={image} alt="profile"/>
      <div class="bg-gray-200 pt-2 border-2 border-zinc-800 mt-2 w-full text-center text-md text-white-600 rounded-lg">
      {city}
      </div>
      <div class="bg-gray-200 pt-2 border-2 shadow-lg border-zinc-800 mt-2 w-full text-center text-md text-white-600 rounded-lg">
      {frame}
      </div>
      <div class="bg-gray-200 pt-2 border-2 shadow-lg border-zinc-800 mt-2 w-full text-center text-md text-white-600 rounded-lg">
      {bio}
      </div>
      <div class="bg-gray-200 pt-2 border-2 shadow-lg border-zinc-800 mt-2 w-full text-center text-md text-white-600 rounded-lg">
      {age}
      </div>
      <div class="bg-gray-200 pt-2 border-2 shadow-lg border-zinc-800 mt-2 w-full text-center text-xl text-white-600 rounded-lg">
      @{instagram}
      </div>
    </div>
  )
}