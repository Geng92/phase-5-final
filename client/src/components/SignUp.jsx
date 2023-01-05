import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const emptyForm = {
  name:"",
  instagram:"",
  image: "",
  city: "",
  frame: "",
  bio: "",
  age: "",
  user_name: "",
  password: ""
}
export default function SignUp({ riders, addRider }) {
    const [ formData, setFormData ] = useState(emptyForm);
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }
        
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/riders`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({...formData})
        })
        .then((res) => res.json())
        .then((newRider) => {
            // addRider(newRider)
            sessionStorage.setItem("user_id", newRider.id)
        })
        .then(handleLogin(formData))
        .then(navigate("/")) 
    }

    const handleLogin = (formData) => {
        sessionStorage.setItem("user_id", formData.id);
    }

  return (
    <div>
      SignUp
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="name..." 
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="instagram" 
          placeholder="your instagram..." 
          value={formData.instagram}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Your picture" 
          value={formData.image}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="city" 
          placeholder="What city are you from?" 
          value={formData.city}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="frame" 
          placeholder="What frame you ride?..." 
          value={formData.frame}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="bio" 
          placeholder="a little about yourself..." 
          value={formData.bio}
          onChange={handleChange}
        />
        <input 
          type="number" 
          name="age" 
          placeholder="Age?..." 
          value={formData.age}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="username" 
          placeholder="username..." 
          value={formData.username}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="password" 
          placeholder="password..." 
          value={formData.password}
          onChange={handleChange}
        />
      </form>
      <button onClick={handleSubmit}>Sign Up!</button>
    </div>
  )
}

