import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar({ user, isLogged, setIsLogged }) {
  const navigate = useNavigate()
  const { name } = user
  
  const handleLogOut = () => {
      sessionStorage.removeItem("user_id")
      setIsLogged(false)
      navigate('/login')
  }

  return (
    <div class="w-screen shadow-lg bg-slate-200 border border-2 border-gray">
         <div class="flex flex-row justify-center antialiased hover:cursor-pointer">           
            <div class="flex md:flex w-screen shadow-lg round justify-center">
              <NavLink 
                className="display: font-bold hover:text-red-600"  
                to="/"
              >
              { isLogged ? `Welcome Back ${name} !` : null }
              </NavLink>  
            </div>

            <div class="flex md:flex w-screen shadow-lg round justify-center">
              <NavLink 
                className="display: font-bold hover:text-red-600" 
                to="/riders"
              >
              Riders
              </NavLink>
            </div>  
          <div class="flex md:flex w-screen shadow-lg round justify-center">

          <NavLink 
            className="display: font-bold hover:text-red-600"
            to="/locations"
            >
            Locations
          </NavLink>  
          </div>
          <div class="flex md:flex w-screen shadow-lg round justify-center">
          <NavLink 
            className="display: font-bold hover:text-red-600" 
            to="/posts"
            >
            Posts
          </NavLink>
              </div>
          <div class="flex md:flex w-screen shadow-lg round justify-center">
          <button 
            className="display: font-bold hover:text-red-600"
            onClick={handleLogOut}
            >
            Exit
          </button>
          </div>
              </div>
      </div>
    
  )
}
