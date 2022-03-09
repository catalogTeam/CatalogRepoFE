import React, { useState, useEffect } from "react";
import { StaticRouter, useParams, BrowserRouter, Link, Route, Routes, Outlet, useNavigate, Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Form from "./Form";
import axios from "axios";
import Home from "./Home";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";
import ReviewPage from "./ReviewPage";


function MyApp() {
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   console.log("rerender")
  //   if (user.username != "" && user.username){
  //     console.log(user.username)
  //     var newUser = getUser(user.username);
  //       if (user != false){
  //         setUser(newUser)
  //       }
  //       else{
  //         console.log("no user found")
  //       }   
  //   }
  // });
  

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

  async function getUser(user) {
    try {
      const response = await axios.get(`http://localhost:5000/user/${user}`)
      console.log(response)
      return response.data
    } catch (error) {
      // We're not handling errors. Just logging into the console.
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
  navigate(`/reviewPage`);

}


  return (
    <div className='container'>
        <Routes>
          <Route path='/' element={ <Navigate replace to = "/home" /> }/>

          <Route path='/form' element={<Form handleSubmit={addUser}/> }/>
    
          <Route path='/home' element={<Home handleSubmit= {assignUser}/>}/>

          <Route path='/user/*' element = { <UserPage userData = {user} handleSubmit = {toReviewPage}/>}/>

          <Route path='*' element={ <ErrorPage />}/>

          <Route path='/reviewPage'element={<ReviewPage userData = {user} handleSubmit= {toUser}/>}/>

        </Routes>
    </div>
  );
}

export default MyApp;
