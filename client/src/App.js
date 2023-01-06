import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import UserContainer from './components/UserContainer';
import PostsContainer from './components/PostsContainer';
import RidersContainer from './components/RidersContainer';
import LocationsContainer from './components/LocationsContainer';

function App() {
  const [ user, setUser ] = useState({})
  const [ posts, setPosts ] = useState([])
  const [ riders, setRiders ] = useState([])
  const [ locations, setLocations] = useState([]) 
  const navigate = useNavigate();
  
  const userPosts = posts.filter((post) => post.rider_id == user.id )
  
  useEffect(() => {
      const currentRider = sessionStorage.getItem("user_id")
      if (currentRider == null){
          navigate("/login")
      }
      else{
          fetch(`/riders/${currentRider}`)
          .then((res) => res.json())
          .then((user) => setUser(user))
      }
  },[])
  
  useEffect(() => {
      fetch(`/posts`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
  },[])

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

  const addRider = (newRider) => {
    setRiders([...riders,newRider])
  }

  return (
    <>
    <div class="w-screen h-screen bg-blue-200 border border-2 border-gray" >
      {/* <img src="https://cdn.shopify.com/s/files/1/1490/5954/files/Screen_Shot_2020-04-22_at_2.45.22_PM_480x480.png?v=1587581136" class="absolute w-screen h-screen mix-blend-overlay"/> */}
      <NavBar />
      <Routes >
        <Route path='/' element={
          <UserContainer 
            user={user} 
            setUser={setUser} 
            userPosts={userPosts} 
            setPosts={setPosts}
          />} 
        />
        <Route path='/login' element={
          <Login 
            riders={riders} 
            setRiders={setRiders}
          />} 
        />
        <Route path='/sign_up' element={
          <SignUp 
            riders={riders} 
            addRider={addRider} 
          />} 
        />
        <Route path='/riders' element={
          <RidersContainer 
            riders={riders}
          />} 
        />
        <Route path='/locations' element={
          <LocationsContainer 
            locations={locations} 
            setLocations={setLocations}
          />} 
        />
        <Route path='/posts' element={
          <PostsContainer 
            posts={posts}
            setPosts={setPosts}
          />} 
        />
      </Routes>
    </div>
    </>
  );
}

export default App;