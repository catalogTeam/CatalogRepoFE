import Form from "./Form";
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
    
      function createForm() {
        ReactDOM.render(<Form />, document.getElementById("root"));
        ReactDOM.render(
          <Form handleSubmit={updateList} />,
          document.getElementById("root")
        );
      }

    function toHomePage(){
        ReactDOM.render(<UserPage/>, document.getElementById('root'));
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
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <input type="button" value="Submit" onClick={createError} />
          </form>
          <button onClick={createForm}>Create New Account</button>
          <button onClick={toHomePage}>HomePageTest</button>
        </html>
      );
    }

export default Home;