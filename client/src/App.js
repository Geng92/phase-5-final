import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import NavBar from './components/NavBar';
// import UserContainer from './components/UserContainer';
// import RidersContainer from './components/RidersContainer';
// import LocationsContainer from './components/LocationsContainer';
// import PostsContainer from './components/PostsContainer';
import BikerGram from './components/BikerGram';

function App() {
  // const [ riders, setRiders ] = useState([])
  // const [ locations, setLocations] = useState([])
  // const [ user, setUser ] = useState({})
  // const [ posts, setPosts ] = useState([])
  // const [ postToEdit, setPostToEdit ] = useState([]) 
  // const navigate = useNavigate();
  
  // const userPosts = posts.filter((post) => post.rider_id == user.id )
  // useEffect(() => {
  //     const currentRider = sessionStorage.getItem("user_id")
  //     if (currentRider == null){
  //         navigate("/login")
  //     }else{
  //         fetch(`/riders/${currentRider}`)
  //         .then((res) => res.json())
  //         .then((user) => setUser(user))
  //     }
  // },[])
  
  
  // useEffect(() => {
  //     fetch(`/posts`)
  //     .then((res) => res.json())
  //     .then((posts) => setPosts(posts))
  // },[])
  // useEffect(() => {
  //   fetch(`/riders`)
  //   .then((res) => res.json())
  //   .then((riders) => setRiders(riders));
  // },[])

  // useEffect(() => {
  //   fetch(`/locations`)
  //   .then((res) => res.json())
  //   .then((locations) => setLocations(locations));
  // },[])

  // const addRider = (newRider) => {
  //   setRiders([...riders,newRider])
  // }
  return (
    <div className="w-full h-full bg-no-repeat background-image: [url(https://www.sandmbikes.com/wp-content/uploads/2019/05/spec.jpg)]">
      <BikerGram />
    </div>
  );
}

export default App;