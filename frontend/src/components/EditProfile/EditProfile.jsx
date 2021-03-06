import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Navigate} from 'react-router-dom';
import './EditProfile.css'
import { TextField, Button, MenuItem } from '@material-ui/core';

//import updateUser from '../../services/updateUser';

import {updateUser} from '../../services/users'

function EditProfile(props) {
  
  const [firstName, setFirstName] = useState(props.user.firstName)
  const [lastName, setLastName] = useState(props.user.lastName)
  const [theme, setTheme] = useState(props.user.theme ? props.user.theme : null)

  const [redirect, setRedirect] = useState(false)


  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleThemeChange = (e) => {
    console.log(e.target.value)
    setTheme(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("value is currnetly")
    console.log(e.target.theme.value)
    const data = await updateUser(props.user, e.target.firstName.value, e.target.lastName.value, e.target.theme.value);
    console.log(data)
    setRedirect(true)
  }

  return redirect ? <Navigate to={`/users/${props.user._id}`} /> : (
    <div className="profile-edit">
      {/* Needs Editing */}
      {/* <form method="POST" action="http://localhost:4000/users/6194fdd0ab95803129569c9c"> */}
      <form onSubmit={handleSubmit}>      
        <TextField onChange={handleFirstNameChange} value={firstName} name="firstName" label="First Name" />
        <TextField onChange={handleLastNameChange} value={lastName} name="lastName" label="Last Name" />
        <TextField value="img" name="img" label="Image URL" />
        <TextField onChange={handleThemeChange} id="select" value={theme} name="theme" select>
          <MenuItem value="Dark">Dark</MenuItem>
          <MenuItem value="Light">Light</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary">Save</Button>
      </form>
    </div>
  )
}

export default EditProfile
