import React from 'react'

export default function UserProfile({ user }) {
  const { name, instagram, image, city, frame, bio, age, professional } = user
  return (
    <div >
      <div class="pt-2 border-t mt-3 w-full text-center text-xl text-gray-600">
        {name}
      </div>
      <img class="border border-indigo-100 shadow-lg round object-none object-center bg-black-300 w-full h-60" src={image} alt="profile"/>
      <div class="pt-2 border-t mt-2 w-full text-center text-md text-gray-600">
      {city}
      </div>
      <div class="pt-2 border-t mt-1 w-full text-center text-sm text-gray-600">
      {frame}
      </div>
      <div class="pt-2 border-t mt-1 w-full text-center text-sm text-gray-600">
      {bio}
      </div>
      <div class="pt-2 border-t mt-1 w-full text-center text-sm text-gray-600">
      {age}
      </div>
      <div class="pt-2 border-t mt-3 w-full text-center text-xl text-gray-600">
      @{instagram}
      </div>
    </div>
  )
}