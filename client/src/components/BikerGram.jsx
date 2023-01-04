import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import NavBar from './NavBar';
import UserContainer from './UserContainer';
import RidersContainer from './RidersContainer';
import LocationsContainer from './LocationsContainer';
import PostsContainer from './PostsContainer';

export default function BikerGram() {
  // const [ ifUser, setIfUser ] = useState(false);
  // const navigate = useNavigate()

  // const handleIfUser = () => {
  //   setIfUser(ifUser => !ifUser)
  // }
  const [ riders, setRiders ] = useState([])
  const [ locations, setLocations] = useState([])
  const [ user, setUser ] = useState({})
  const [ posts, setPosts ] = useState([])
  // const [ postToEdit, setPostToEdit ] = useState([]) 
  const navigate = useNavigate();
  
  const userPosts = posts.filter((post) => post.rider_id == user.id )
  
  useEffect(() => {
      const currentRider = sessionStorage.getItem("user_id")
      if (currentRider == null){
          navigate("/login")
      }else{
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
    <div className="w-full h-full bg-no-repeat background-image: [url(https://www.sandmbikes.com/wp-content/uploads/2019/05/spec.jpg)]">
      <NavBar />
      <Routes >
        <Route path='/' element={<UserContainer user={user} setUser={setUser} userPosts={userPosts} setPosts={setPosts}/>} />
        <Route path='/login' element={<Login riders={riders} setRiders={setRiders}/>} />
        <Route path='/sign_up' element={<SignUp riders={riders} addRider={addRider} />} />
        <Route path='/riders' element={<RidersContainer riders={riders}/>} />
        <Route path='/locations' element={<LocationsContainer locations={locations}/>} />
        <Route path='/posts' element={<PostsContainer posts={posts}/>} />
      </Routes>
    </div>
    </>
    )
  }
  
  // <div>
  //   { ifUser ? 
  //   <UserContainer 
  //     onUserCreate={handleIfUser}
  //   /> : navigate("/login")}
  // </div>