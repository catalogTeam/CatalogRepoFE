import React, { useState } from "react";
import {  Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Form from "./Form";
import axios from "axios";
import Home from "./Home";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";
import ReviewPage from "./ReviewPage";


function MyApp() {
  const [user, setUser] = useState({});

  let navigate = useNavigate(); 

  async function makePostCall (person) {
    try {
      const response = await axios.post('http://localhost:5000/user', person)
      return response
    } catch (error) {
      console.log(error)
      return false
    }
  }

  function assignUser(user) {
    setUser(user);
    console.log(user)
    navigate(`/user/${user.username}`);
  }

  async function toUser(reviewData) {
    console.log(user.reviews)
    var reviewList = user.reviews
    reviewList.push(reviewData)
    user.reviews = reviewList
    console.log(user.reviews)
    navigate(`/user/${user.username}`);
  }

  function addUser(user) {
    console.log(user)
    makePostCall(user).then((result) => {
      if (result && result.status === 201) {
        setUser(user);
        navigate(`/user/${user.username}`);
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

          <Route path='/form' element={<Form handleSubmit={addUser}/> }/>
    
          <Route path='/home' element={<Home handleSubmit= {assignUser}/>}/>

          <Route path='/user/*' element = { <UserPage userData = {user} handleSubmit = {toReviewPage}/>}/>

          <Route path='*' element={ <ErrorPage />}/>

          <Route path='/review'element={<ReviewPage userData = {user} handleSubmit= {toUser}/>}/>

        </Routes>
    </div>
  );
}

export default MyApp;
