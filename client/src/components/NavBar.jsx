import React from 'react'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate()

  const handleLogOut = () => {
      sessionStorage.removeItem("user_id")
      navigate('/login')
  }
  return (
    <div class="w-screen bg-purple-200 border border-2 border-gray">
      <div >
        <h1 
          className="display: font-bold text-center"
        >
          BikerGram
        </h1>
        <div class="flex flex-row px-40">

        <label class="flex md:flex w-screen">
          <NavLink 
            className="display: font-bold text-center" 
            to="/"
            >
            Home
          </NavLink>  
          </label>
          <label class="flex md:flex w-screen">
          <NavLink 
            className="display: font-bold text-center" 
            to="/riders"
            >
            Riders
          </NavLink>
          </label>  
          <label class="flex md:flex w-screen">

          <NavLink 
            className="display: font-bold text-center" 
            to="/locations"
            >
            Locations
          </NavLink>  
          </label>
          <label class="flex md:flex w-screen">

          <NavLink 
            className="display: font-bold text-center" 
            to="/posts"
            >
            Posts
          </NavLink>
              </label>
          <button 
            className="display: font-bold text-center"
            onClick={handleLogOut}
            >
            LogOut
          </button>
              </div>
          </div>
      </div>
    
  )
}
