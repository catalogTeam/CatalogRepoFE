import React, { useState } from "react";
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

  const [nameData, setName] = useState({ user: ""});
  const [characters, setCharacters] = useState([])


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

  async function makeDeleteCall (id) {
    try {
      const response = await axios.delete('http://localhost:5000/user/' + id)
      return response
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async function PopUserPage(person) {
    try {
      const response = await axios.get('http://localhost:5000/user/' + person)
      return response
    } catch (error) {
      console.log(error)
      return false
    }
  }

  function updateList (person) {
    makePostCall(person).then(result => {
      if (result && result.status === 201) {
        setCharacters([...characters, result.data])
      }
    })
  }

  function assignUser(user) {
    setUser(user);
    console.log(user)
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

  return (
    <div className='container'>
        <Routes>
          <Route path='/' element={ <Navigate replace to = "/home" /> }/>

          <Route path='/form' element={<Form handleSubmit={addUser}/> }/>
    
          <Route path='/home' element={<Home handleSubmit= {assignUser}/>}/>

          <Route path='/user/*' element = { <UserPage userData = {user}/>}/>

          <Route path='*' element={ <ErrorPage />}/>

          <Route path='/reviewPage'element={<ReviewPage />}/>

        </Routes>
    </div>
  );
}

export default MyApp;
