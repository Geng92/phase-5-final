import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ isLogged, setIsLogged }) {
    const [ formData, setFormData ] = useState('');
    const [ errors, setErrors ] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const currentRider = sessionStorage.getItem("user_id")
        if (currentRider) {
            navigate("/")
        }
    },[]);

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
            }
            else {
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
    <div >
      <h1
        className="mt-6 text-2xl py-2 font-bold text-gray-900 sm:text-3xl md:text-4xl text-center"
      >
        Welcome to React Riders!
      </h1>
      <div className="text-center">
      <form  onSubmit={onSubmit}>
        <label  className="block text-lg font-medium text-gray-700">
            Sign in!
            </label>
            <input 
                type="text"
                name="username"
                id="Username"
                placeholder="username"
                value={username}
                onChange={handleChange}
                class="mt-1 w-50 h-37 rounded-md border-gray-200 bg-white text-xl  text-gray-700 shadow-sm"
            />
        <div className="col-span-6 sm:col-span-3">
            <input 
                type="password"
                name="password"
                id="Password"
                placeholder='***********'
                value={password}
                onChange={handleChange}
                class="mt-1 w-50 h-37 rounded-md border-gray-200 bg-white text-xl text-gray-700 shadow-sm"
                />
        </div>
        <div>
        <div className="py-2">
            <button 
                value="login" 
                className="bg-indigo-400 hover:bg-indigo-300 text-white text-xl p-2 rounded-lg"
                >
                Login
            </button>
        </div>
        <div>
            <label
              className="block text-sm font-medium py-1 text-gray-700"
              >
              Don't have one?
              </label>
            <button 
                onClick={handleClick}
                className="bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg"
                >
            Create an Account
            </button>
            </div>
            {errors? <div className="text-red-600">{errors}</div> : null}    
        </div>
      </form>
    </div>
    </div>
  )
}