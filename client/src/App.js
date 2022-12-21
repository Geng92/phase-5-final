import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import UserContainer from './components/UserContainer'
import RidersContainer from './components/RidersContainer'
import LocationsContainer from './components/LocationsContainer'
import PostsContainer from './components/PostsContainer'

function App() {
  const [ riders, setRiders ] = useState([])

  useEffect(() => {
    fetch(`/riders`)
    .then((res) => res.json())
    .then((riders) => setRiders(riders));
  },[])

  return (
    <div >
      <NavBar />
      <Routes >
        <Route path='/' element={<UserContainer riders={riders}/>} />
        <Route path='/login' element={<Login riders={riders} setRiders={setRiders}/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/riders' element={<RidersContainer />} />
        <Route path='/locations' element={<LocationsContainer />} />
        <Route path='/posts' element={<PostsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
