import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RiderDetail from './RiderDetail'
import RidersGallery from './RidersGallery'

export default function RidersContainer({ refresh, setIsLogged }) {
    const [ riders, setRiders ] = useState([])
    const [ selectRiderId, setSelectRiderId ] = useState([])
    const [ searchQuery, setSearchQuery ] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const currentRider = sessionStorage.getItem("user_id")
        if (currentRider == null){
            setIsLogged(false)
            navigate("/login")
            refresh()
        }
        else{
          fetch(`/riders`)
          .then((res) => res.json())
          .then((riders) => setRiders(riders));
          setIsLogged(true)
        }
    },[]);

    const selectedRider = riders.find((rider) => rider.id === selectRiderId) 

    const handleSelectRider = (rider) => {
        setSelectRiderId(rider.id)
    }

    const ridersToDisplay = riders.filter((rider) => 
        rider.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


  return (
    <div class="bg-blue-200">
        <label class="block text-xl my-3 text-center font-medium text-gray-700">
            Riders
        </label>
        <RiderDetail 
            rider={selectedRider}
        />
        <RidersGallery 
            riders={ridersToDisplay}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onClickRider={handleSelectRider}
        />
    </div>
  )
}