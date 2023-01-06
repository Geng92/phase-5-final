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
  username: "",
  password: ""
}
export default function SignUp({}) {
    const [ formData, setFormData ] = useState(emptyForm);
    const [ errors, setErrors ] = useState([])
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }
        
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch(`/riders`, {
    //         method: 'POST',
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //         body: JSON.stringify({...formData})
    //     })
    //     .then((res) => res.json())
    //     .then((newRider) => {
    //         sessionStorage.setItem("user_id", newRider.id)
    //     })
    //     .then(handleLogin(formData))
    //     .then(navigate("/")) 
    // }

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`/riders`, {
          method: 'POST',
          headers: {
              "Content-type": "application/json",
          },
          body: JSON.stringify({...formData})
      })
      .then((res) => {
        if(res.ok){
          res.json().then((newRider) => {
            sessionStorage.setItem("user_id", newRider.id)
        })
        .then(handleLogin(formData))
        .then(navigate("/")) 
        }
        else {
          res.json().then(json => 
            setErrors(json.errors))
        }
      })
    }
    const handleLogin = (formData) => {
        sessionStorage.setItem("user_id", formData.id);
    }

  return (
    <div class="text-center text-xl ">
      SignUp
      <div class="text-center">

      <form onSubmit={handleSubmit}>
        <div>
        
        <input 
          type="text" 
          name="name" 
          placeholder="name..." 
          value={formData.name}
          onChange={handleChange}
          class="mt-1 w-50 h-37  mx-1 rounded-md border-gray-200 bg-white text-xl text-gray-700 shadow-sm"
          />
        <input 
          type="text" 
          name="instagram" 
          placeholder="@. . . . . . . ." 
          value={formData.instagram}
          onChange={handleChange}
          class="mt-1 w-50 h-37 mx-1 rounded-md border-gray-200 bg-white text-xl text-gray-700 shadow-sm"
          />
        <input 
          type="text" 
          name="image" 
          placeholder="Picture" 
          value={formData.image}
          onChange={handleChange}
          class="mt-1 w-50 h-37 mx-1 rounded-md border-gray-200 bg-white text-xl text-gray-700 shadow-sm"
          />
        </div>
        <div>

        <div>
        <input 
          type="text" 
          name="city" 
          placeholder="What city are you from?" 
          value={formData.city}
          onChange={handleChange}
          class="mt-1 w-50 h-37 mx-1 rounded-md border-gray-200 bg-white text-xl text-gray-700 shadow-sm"
          />
        <input 
          type="text" 
          name="frame" 
          placeholder="What frame you ride?..." 
          value={formData.frame}
          onChange={handleChange}
          class="mt-1 w-50 h-37 mx-1 rounded-md border-gray-200 bg-white text-xl text-gray-700 shadow-sm"
          />

        </div>
        <input 
          type="text" 
          name="bio" 
          placeholder="a little about yourself..." 
          value={formData.bio}
          onChange={handleChange}
          class="mt-1 w-50 h-37 mx-1 rounded-md border-gray-200 bg-white text-xl text-gray-700 shadow-sm"
          />
        <input 
          type="number" 
          name="age" 
          placeholder="Age?..." 
          value={formData.age}
          onChange={handleChange}
          class="mt-1 w-50 h-37 mx-1 rounded-md border-gray-200 bg-white text-xl text-gray-700 shadow-sm"
          />
        </div>
        <div>

        <input 
          type="text" 
          name="username" 
          placeholder="username..." 
          value={formData.username}
          onChange={handleChange}
          class="mt-1 w-50 h-37 rounded-md border-gray-200 bg-white text-xl text-gray-700 shadow-sm"
          />
        </div>
        <input 
          type="text" 
          name="password" 
          placeholder="password..." 
          value={formData.password}
          onChange={handleChange}
          class="mt-1 w-50 h-37 rounded-md border-gray-200 bg-white text-xl text-gray-700 shadow-sm"
          />
      </form>
      <button 
        onClick={handleSubmit}
        class="bg-indigo-400 hover:bg-indigo-300 text-white text-xl p-2 my-2 rounded-lg"
        >
      Sign Up!
      </button>
      </div>
        {errors ? <div class="text-center text-red-600 text-xl font-bold ">
          Missed Something!
          </div> : null}
    </div>
  )
}

