import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom";
import { getOneUser } from '../../services/users';


function Profile(props) {

  const { id } = useParams();

  const [user, setUser] = useState(null)

  useEffect(async () => {
    const {data} = await getOneUser(id);
    setUser(data)
  }, [])

  return (
    <div>
      <h1>Hi, {props.user.firstName}! </h1>
      <h2>User Details for {user ? user.firstName : "User Data Loading ..."}</h2>
      <p>This is where all the user details will appear.</p>
    </div>
  )
}

export default Profile
