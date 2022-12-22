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
    },[]);

    const { username, password } = formData

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
        navigate("/signup")
    }
  return (
    <div>Login</div>
  )
}