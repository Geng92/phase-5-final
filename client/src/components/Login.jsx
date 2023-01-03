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
    <div>
        Login to gain access
      <form className="mt-8 space-y-6" onSubmit={onSubmit}>
        <input 
            type="text"
            name="username"
            placeholder='username'
            value={username}
            onChange={handleChange}
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        <input 
            type="text"
            name="password"
            placeholder='password'
            value={password}
            onChange={handleChange}
        />
        <button value="login">login</button>
        <button onClick={handleClick}>signup</button>
      </form>
      {errors? <div>{errors}</div> : null}    
    </div>
  )
}