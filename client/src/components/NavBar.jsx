import React from 'react'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate()

  const handleLogOut = () => {
      sessionStorage.removeItem("user_id")
      //some setState thing
      navigate('/login')
  }
  return (
    <div>
      NavBar
      <NavLink to="/">User Profile</NavLink>  
      <NavLink to="/riders">Riders</NavLink>  
      <NavLink to="/locations">Locations</NavLink>  
      <NavLink to="/posts">Posts</NavLink>
    <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}
