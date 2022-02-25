import Form from "./Form";
import { useNavigate, BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import ErrorPage from "./ErrorPage";
import UserPage from "./UserPage";
import ReactDOM from 'react-dom';
import "./home.css";
import axios from "axios";


function Home() {
    
    const [users, setUsers] = useState([]);

    async function makePostCall(user) {
        try {
          console.log("post call");
          const response = await axios.post("http://localhost:5000/users", user);
          return response;
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      function updateList(user) {
        console.log("update list");
        makePostCall(user).then((result) => {
          if (result && result.status === 201) setUsers([...users, result.data]);
        });
      }

    let navigate = useNavigate();

    return (
      <div>
        <html>
          <head>
            <title>HTML Elements Reference</title>
          </head>
          <body>
            <h1>Music Catalog</h1>
            <sub>Enter username to edit or click below to create new page</sub>
          </body>
          <form>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <input type="button" value="Submit" onClick={() => navigate("/ErrorPage")} />
          </form>
          
          <button onClick={() => navigate("/Form")}>Create New Account</button>
          <button onClick={() => navigate("/Home")}>HomePageTest</button>
        </html>
        
      </div>
      );
    }

export default Home;