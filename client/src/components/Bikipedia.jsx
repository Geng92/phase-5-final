import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import LocationsContainer from './LocationsContainer';
import RidersContainer from './RidersContainer';
import UserContainer from './UserContainer';

export default function Bikipedia() {
  const [ ifUser, setIfUser ] = useState(false);
  const navigate = useNavigate()

  const handleIfUser = () => {
    setIfUser(ifUser => !ifUser)
  }

  return (
    <div>
      <div>
        { ifUser ? 
        <UserContainer 
          onUserCreate={handleIfUser}
        /> : navigate("/login")}
      </div>
      <LocationsContainer />
      <RidersContainer />
    </div>
  )
}
