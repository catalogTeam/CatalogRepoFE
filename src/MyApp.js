import React, { useState, useEffect } from "react";
import {  Route, Routes, useNavigate, Navigate, useLocation } from 'react-router-dom';
import Form from "./Form";
import axios from "axios";
import Home from "./Home";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";
import ReviewPage from "./ReviewPage";
import ProfilePage from "./ProfilePage";
import SignUpPage from "./SignUpPage";
import { useCookies } from 'react-cookie';
import ProfileView from "./ProfileView";
import ProfilePageList from "./ProfilePageList";
import UserView from "./UserView";
import ProfileForm from "./ProfileForm";
import TestSignup from "./TestSignup";


function MyApp() {

  let location = useLocation();


  const [user, setUser] = useState({});

  const [page, setPage] = useState({});

  const [post, setPost] = useState({});

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

  useEffect(() => {
    console.log("executing use")
    console.log(user)
    fetchAll().then(result => {
      if (result) { setUser(result) 
      console.log(user)}
    })
  }, [cookies], user, location)

  async function fetchAll () {
    try {
      const config = {
        headers: { Authorization: `Bearer ${cookies.auth_token}` }
      }
      const response = await axios.get(`http://localhost:5000/user/${user.username}`, config)
      console.log(response.data[0])
      return response.data[0]
    } catch (error) {
      // We're not handling errors. Just logging into the console.
      console.log(error)
      return false
    }
  }

  async function changeUser (username, token) {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
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

  async function toForm(user, page, post){
    setUser(user)
    setPage(page);
    setPost(post);
    navigate(`/form`);
  }

  async function toProfForm(user){
    setUser(user)
    navigate('/profile/form');
  }

  async function toPagesView(user){
    setUser(user)
    // Get pages
    try{
      let response = await axios.get(`http://localhost:5000/pages/${user.username}`);
      setPage(response.data);
      navigate(`/profile/pages/${user.username}`);
    }
    catch (error) {
      console.log(error)
    }
  }

  async function toPage(user, page){
    setUser(user)
    setPage(page)
    navigate(`/profile/page/${page.pageName}`);
  }

  async function postSignedInUser(token, userData) {
    console.log(userData)

    setToken(token)

    setUser(userData)

  }


  async function toSignedInUser(token, userData) {
    console.log("success")

    changeUser(userData.username, token).then(result => {
      if (result) { setUser(result) 
      console.log(user)}
    })

    setToken(token)
  }

  function addUser(user) {
    console.log(user)
    makePostCall(user).then((result) => {
      if (result && result.status === 201) {
        setUser(user);
        navigate(`/profile/${user.username}`);
      }
    });
}


function toReviewPage(){
  console.log("going to review page")
  navigate(`/review`);

}


return (
  <div className='container'>
      <Routes>
        <Route path='/' element={ <Navigate replace to = "/home" /> }/>

        <Route path='/form' element={<Form userData = {user} pageData={page} post={post} handleSubmit={toPagesView}/> }/>

        <Route path='/profile/form' element={<ProfileForm userData = {user} handleSubmit={postSignedInUser}/>}/>
  
        <Route path='/home' element={<Home handleSubmit= {assignUser}/>}/>

        <Route path='/profile/*' element = { <ProfileView userData = {user} toForm = {toProfForm} handleSubmit = {toReviewPage} toPages={toPagesView}/>} />

        <Route path="/profile/pages/*" element={ <ProfilePageList userData={user} pages={page} toPage={toPage} toForm={toForm}/>} />

        <Route path="/profile/page/*" element={<ProfilePage userData={user} pageData={page} toForm={toForm} handleSubmit={toPagesView} />} />

        <Route path='/user/:username' element = { <UserView handleSubmit = {toReviewPage}/>}/>

        <Route path='*' element={ <ErrorPage />}/>

        <Route path='/review' element={<ReviewPage userData = {user} handleSubmit= {toUser}/>}/>

        <Route path='/signup' element={ <TestSignup handleLogin = {toSignedInUser}/>} handleSubmit= {postSignedInUser}/>
        
        {/* <Route path='/login' element={ <TestLogin handleLogin = {toSignedInUser} />} /> */}

      </Routes>
  </div>
);
}

export default MyApp;
