import Form from "./Form";
import React, { useState, useEffect } from "react";
import ErrorPage from "./ErrorPage";
import UserPage from "./UserPage";
import ReactDOM from 'react-dom';
import "./home.css";
import axios from "axios";


function Home() {
    
    const [users, setUsers] = useState([]);

    const [nameData, setName] = useState({ user: ""});

    function handleChange(event) {
      const { name, value } = event.target;
      if (name === "user") setName({ ...nameData, user: value });
    }

    async function getUser(user) {
      try {
        const response = await axios.get(`http://localhost:5000/${user}`)
        console.log(response)
        return response.data
      } catch (error) {
        // We're not handling errors. Just logging into the console.
        console.log(error)
        return false
      }
    }

    async function makePostCall(user) {
        try {
          console.log(user);
          const response = await axios.post("http://localhost:5000/user", user);
          return response;
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      function addUser(user) {
        makePostCall(user).then((result) => {
          if (result && result.status === 201) setUsers([...users, result.data]);
        });
        ReactDOM.render(<UserPage userData = {user}/>, document.getElementById('root'));
      }
    
      function createForm() {
        ReactDOM.render(<Form />, document.getElementById("root"));
        ReactDOM.render(
          <Form handleSubmit={addUser} />,
          document.getElementById("root")
        );
      }

    function toUserPage(){
        const username = nameData.user
        const userResponse = getUser(username)
        console.log(userResponse)
        ReactDOM.render(<UserPage userData = {userResponse.data}/>, document.getElementById('root'));
    }

    function createError(){
        ReactDOM.render(<ErrorPage />, document.getElementById('root'));
    }

    return (
        <html>
          <head>
            <title>HTML Elements Reference</title>
          </head>
          <body>
            <h1>Music Catalog</h1>
            <sub>Enter username to edit or click below to create new page</sub>
          </body>
          <form>
            <label htmlFor="user">Username</label>
            <input
            type="text"
            name="user"
            id="user"
            value={nameData.user}
            onChange={handleChange} />
            <input type="button" value="Submit" onClick={toUserPage} />
          </form>
          <button onClick={createForm}>Create New Account</button>
        </html>
      );
    }

export default Home;