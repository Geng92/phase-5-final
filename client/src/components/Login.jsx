import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [ formData, setFormData ] = useState('');
    const [ errors, setErrors ] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const currentRider = sessionStorage.getItem("user_id")
        if (currentRider) {
            navigate("/")
        }
    },[navigate]);

    const { username, password } = formData;

    const handleLogin = (rider) => {
        sessionStorage.setItem("user_id", rider.id);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const rider = {
            username,
            password
        }
        fetch(`/login`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(rider)
        })
        .then(res => {
            if(res.ok){
                res.json().then(currentRider => 
                    handleLogin(currentRider))
                    .then(() => {navigate("/")})
            }else {
                res.json().then(json => setErrors(json.errors))
            }
        })    
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleClick = () => {
        navigate("/sign_up")
    }

  return (
    <div class="bg-[url(https://www.sandmbikes.com/wp-content/uploads/2019/05/spec.jpg)]">
        <h1
          class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
          >
            Login to gain access
        </h1>

      <form action="#" class="mt-8 grid grid-cols-6 gap-6" onSubmit={onSubmit}>
        <label for="Username" class="block text-sm font-medium text-gray-700">
              Username
        </label>
            <input 
            type="text"
            name="username"
            id="Username"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            placeholder='username'
            value={username}
            onChange={handleChange}
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          <div class="col-span-6 sm:col-span-3">

          <label
              for="Password"
              class="block text-sm font-medium text-gray-700"
              >
              Password
            </label>
        <input 
            type="password"
            name="password"
            id="Password"
            placeholder='password'
            value={password}
            onChange={handleChange}
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
        </div>
        <button value="login">login</button>
        <button onClick={handleClick}>signup</button>
      </form>
      {errors? <div>{errors}</div> : null}    
    </div>
  )
}