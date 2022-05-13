import React, { useState, useEffect } from "react";
import {  Route, Routes, useNavigate, Navigate, useLocation } from 'react-router-dom';
import Form from "./Form";
import axios from "axios";
import Home from "./Home";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";
import ReviewPage from "./ReviewPage";
import ProfilePage from "./ProfilePage";
import { useCookies } from 'react-cookie';

import Signup from "./Signup";


function MyApp() {

  let location = useLocation();

  const [user, setUser] = useState({
  });

  const [cookies, setCookie] = useCookies(['auth_token']);

  let navigate = useNavigate(); 

  function setToken (token) {
    setCookie('auth_token', token,
      {
        maxAge: 1800,
        path: '/'
      }
    )
  }

  // useEffect(() => {
  //   console.log("executing use")
  //   console.log(user)
  //   fetchAll().then(result => {
  //     if (result) { setUser(result) 
  //     console.log(user)}
  //   })
  // }, [cookies], user, location)

  // async function fetchAll () {
  //   try {
  //     const config = {
  //       headers: { Authorization: `Bearer ${cookies.auth_token}` }
  //     }
  //     const response = await axios.get(`http://localhost:5000/user/${user.username}`, config)
  //     console.log(response.data[0])
  //     return response.data[0]
  //   } catch (error) {
  //     // We're not handling errors. Just logging into the console.
  //     console.log(error)
  //     return false
  //   }
  // }



  async function changeUser (username) {
    try {
      const config = {
        headers: { Authorization: `Bearer ${cookies.auth_token}` }
      }
      console.log("nameee")
      console.log(username)
      const response = await axios.get(`http://localhost:5000/user/${username}`, config)
      console.log(response.data[0])
      return response.data[0]
    } catch (error) {
      // We're not handling errors. Just logging into the console.
      console.log(error)
      return false
    }
  }

  async function makePostCall (user) {
    try {
      const response = await axios.post('http://localhost:5000/user', user)
      return response
    } catch (error) {
      console.log(error)
      return false
    }
  }

  function assignUser(user) {
    setUser(user);
    console.log(user)
    navigate(`/profile/${user.username}`);
  }

  async function toUser(reviewData) {
    console.log(user.reviews)
    var reviewList = user.reviews
    reviewList.push(reviewData)
    user.reviews = reviewList
    console.log(user.reviews)
    navigate(`/profile/${user.username}`);
  }

  async function toForm(user){
    setUser(user)
    navigate(`/form`);
  }

  async function SignupSubmit(user, token){
    console.log(user)
    setSignedInUser(token, user)

  }

  async function setSignedInUser(token, userData) {
    console.log(userData)

    setToken(token)

    setUser(userData)

    const name = localStorage.getItem('username');

  }

  async function toSignedInUser2(username) {
    console.log("success")

    console.log(localStorage.getItem('username'))

    const name = localStorage.getItem('username');

    changeUser(name).then(result => {
      if (result) { setUser(result) 
      console.log(user)}
    })

  }

  async function accessControlHandler(user, token, signupBool){
      setData(user, token)
  }

  async function setData(userData, token) {

    localStorage.setItem('username', userData.username);

    console.log(localStorage.getItem('username'))

    setUser(userData)

    setToken(token)

  }

function toProfile(){

  const name = localStorage.getItem('username');

  if (name){
    navigate(`/profile/${name}`)
  }
}

function toReviewPage(){
  navigate(`/review`);

}


return (
  <div className='container'>
      <Routes>
        <Route path='/' element={ <Navigate replace to = "/home" /> }/>

        <Route path='/form' element={<Form userData = {user} handleSubmit={setSignedInUser}/> }/>
  
        <Route path='/home' element={<Home handleSubmit= {assignUser}/>}/>

        <Route path='/profile/:username' element = { <ProfilePage userData = {user} updatePage = {toSignedInUser2} handleSubmit = {toReviewPage}/> } />

        <Route path='/user/:username' element = { < UserPage handleSubmit = {toReviewPage}/>}/>

        <Route path='/review' element={<ReviewPage userData = {user} handleSubmit= {toProfile}/>}/>

        <Route path='/signup' element={ <Signup handleSubmit = {accessControlHandler}/>} />
        
        <Route path='/errorpage' element={ <ErrorPage />}/>
      </Routes>
  </div>
);
}

export default MyApp;
