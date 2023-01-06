import React from 'react'
import Location from './Location'

export default function LocationsGallery({ locations }) {
  
  const locationCards = locations.map((location) => 
    <Location 
      key={location.id}
      id={location.id}
      location={location}
    />
  )

  return (
    <div class="bg-blue-200">
      <label class="block text-xl my-3 py-4 mx-60 text-center font-medium rounded-lg bg-slate-300 text-gray-700 border border-2 border-slate-400">
        Locations 
      </label>
      {locationCards}
    </div>
  )
}