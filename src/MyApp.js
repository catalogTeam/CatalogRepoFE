import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import Form from "./Form";
import axios from "axios";
import UserPage from "./UserPage";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import ReviewPage from "./ReviewPage";

function MyApp() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchAll().then(result => {
      if (result) { setCharacters(result) }
    })
  }, [])

  async function fetchAll () {
    try {
      const response = await axios.get('http://localhost:5000/users')
      return response.data.users_list
    } catch (error) {
      // We're not handling errors. Just logging into the console.
      console.log(error)
      return false
    }
  }

  async function makePostCall (person) {
    try {
      const response = await axios.post('http://localhost:5000/users', person)
      return response
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async function makeDeleteCall (id) {
    try {
      const response = await axios.delete('http://localhost:5000/users/' + id)
      return response
    } catch (error) {
      console.log(error)
      return false
    }
  }

  function removeOneCharacter (index) {
    makeDeleteCall(characters[index]._id).then(result => {
      if (result && result.status === 204) {
        const updated = characters.filter((character, i) => {
          return i !== index
        })
        setCharacters(updated)
      }
    })
  }

  function updateList (person) {
    makePostCall(person).then(result => {
      if (result && result.status === 201) {
        setCharacters([...characters, result.data])
      }
    })
  }

  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <h1>Root page. Nothing is here</h1>
            }
          />
          <Route
            path='/Form'
            element={
              <Form handleSubmit={updateList} />
            }
          />
          <Route
            path='/Home'
            element={
              <Home />
            }
          />
          <Route
            path='/UserPage'
            element={
              <UserPage />
            }
          />
          <Route
            path='/ErrorPage'
            element={
              <ErrorPage />
            }
          />
          <Route
            path='/ReviewPage'
            element={
              <ReviewPage />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyApp;
