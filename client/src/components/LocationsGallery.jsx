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
    <div>
      Location
      {locationCards}
    </div>
  )
}