import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import UserContainer from './components/UserContainer';
import RidersContainer from './components/RidersContainer';
import LocationsContainer from './components/LocationsContainer';
import PostsContainer from './components/PostsContainer';

function App() {
  const [ riders, setRiders ] = useState([])
  const [ locations, setLocations] = useState([])
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    fetch(`/riders`)
    .then((res) => res.json())
    .then((riders) => setRiders(riders));
  },[])

  useEffect(() => {
    fetch(`/locations`)
    .then((res) => res.json())
    .then((locations) => setLocations(locations));
  },[])

  useEffect(() => {
    fetch(`/posts`)
    .then((res) => res.json())
    .then((posts) => setPosts(posts))
  },[])

  return (
    <div >
      <NavBar />
      <Routes >
        <Route path='/' element={<UserContainer riders={riders}/>} />
        <Route path='/login' element={<Login riders={riders} setRiders={setRiders}/>} />
        <Route path='/sign_up' element={<SignUp />} />
        <Route path='/riders' element={<RidersContainer riders={riders}/>} />
        <Route path='/locations' element={<LocationsContainer locations={locations}/>} />
        <Route path='/posts' element={<PostsContainer posts={posts} setPosts={setPosts}/>} />
      </Routes>
    </div>
  );
}

export default App;