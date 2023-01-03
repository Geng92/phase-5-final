import React, { useState } from 'react'
import LocationDetails from './LocationDetails'
import LocationsGallery from './LocationsGallery'

export default function LocationsContainer({ locations }) {
  const [selectLocationId, setSelectLocationId ] = useState([]) 
  
  const selectedLocation = locations.find((location) => location.id === selectLocationId)

  const handleSelectLocation = (location) => {
        setSelectLocationId(location.id)
  }
  
  return (
    <div>
      Location
      <LocationDetails 
        location={selectedLocation}
      />
      <LocationsGallery 
        locations={locations}
        onClickLocation={handleSelectLocation} 
      />
    </div>
  )
}