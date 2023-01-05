import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LocationDetails from './LocationDetails'
import LocationsGallery from './LocationsGallery'

export default function LocationsContainer({ locations, setLocations }) {
  const [selectLocationId, setSelectLocationId ] = useState([]) 
  const navigate = useNavigate()
  useEffect(() => {
    const currentRider = sessionStorage.getItem("user_id")
    if (currentRider == null){
        navigate("/login")
    }else{
    fetch(`/locations`)
    .then((res) => res.json())
    .then((locations) => setLocations(locations));
    }
},[]);

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