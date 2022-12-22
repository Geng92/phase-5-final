import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RidersContainer() {
    const [ riders, setRiders ] = useState([])

    useEffect(() => {
        fetch(`/riders`)
        .then((res) => res.json())
        .then((riders) => setRiders(riders))
    },[setRiders])



  return (
    <div>Rider</div>
  )
}