import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RiderDetail from './RiderDetail'
import RidersGallery from './RidersGallery'

export default function RidersContainer() {
    const [ riders, setRiders ] = useState([])
    const [ selectRiderId, setSelectRiderId ] = useState([])
    const [ searchQuery, setSearchQuery ] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const currentRider = sessionStorage.getItem("user_id")
        if (currentRider == null){
            navigate("/login")
        }
        else{
          fetch(`/riders`)
          .then((res) => res.json())
          .then((riders) => setRiders(riders));
        }
    },[]);

    const selectedRider = riders.find((rider) => rider.id === selectRiderId) 

    const handleSelectRider = (rider) => {
        setSelectRiderId(rider.id)
    }

  return (
    <div>
        Rider
        <RiderDetail 
            rider={selectedRider}
        />
        <RidersGallery 
            riders={riders}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onClickRider={handleSelectRider}
        />
    </div>
  )
}