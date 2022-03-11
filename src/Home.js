import Form from "./Form";
import React, { useState, useEffect } from "react";
import { useNavigate, BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ErrorPage from "./ErrorPage";
import UserPage from "./UserPage";
import ReactDOM from 'react-dom';
import "./home.css";
import "./index.css"
import axios from "axios";
import { MDBAccordion, MDBAccordionItem, MDBBadge } from "mdb-react-ui-kit";

function Home(props) {
    let navigate = useNavigate();

    
    const [nameData, setName] = useState({ user: ""});

    function handleChange(event) {
      const { name, value } = event.target;
      if (name === "user") setName({ ...nameData, user: value });
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

      async function checkUser(username){
        var user = await getUser(username);
        if (user != false){
          props.handleSubmit(user[0])
        }
        else{
          console.log("no user found")
        }    
      }

      function createForm() {
        ReactDOM.render(<Form />, document.getElementById("root"));
        ReactDOM.render(
          <Form handleSubmit={addUser} />,
          document.getElementById("root")
        );
      }

      function addUser(user) {
        makePostCall(user).then((result) => {
          if (result && result.status === 201){
            console.log(result.data)
            props.handleSubmit(result.data)
          }
        });
      }
    
      function createError(){
        ReactDOM.render(<ErrorPage />, document.getElementById('root'));
    }

    //   function addUser(user) {
    //     console.log("adding user");
    //     makePostCall(user).then((result) => {
    //       if (result && result.status === 201) setUsers([...users, result.data]);
    //     });
    //     ReactDOM.render(<UserPage userData = {user}/>, document.getElementById('root'));
    // }

    // function createForm() {
    //   ReactDOM.render(<Form />, document.getElementById("root"));
    //   ReactDOM.render(
    //     <Form handleSubmit={addUser} />,
    //     document.getElementById("root")
    //   );
    // }

    // function toUserPage(){
    //     const username = nameData.user
    //     const userResponse = getUser(username)
    //     console.log(userResponse)
        
    //     ReactDOM.render(<UserPage userData = {userResponse.data}/>, document.getElementById('root'));

    // }



    return (
        <html>
          <head>
            <title>HTML Elements Reference</title>
          </head>
          <body>
            <h1>Catalog</h1>
            <div id="belowTitle">Enter username below to search for an already created user page</div>
          </body>
          <div id="jawn">
          <MDBAccordion initialActive="AC1">
            <MDBAccordionItem
              collapseId="AC1"
              headerTitle="Step 1: Enter a username, bio, and picture"
              >Make it your page by adding a username, bio, and picture to give it
              that charm that only you can give.</MDBAccordionItem>
            <MDBAccordionItem
              collapseId="AC2"
              headerTitle="Step 2: List your favorite Artists and Ablums"
              >Using our page creater you can easily type in any artist or album and
              have it added to your page. Customize it even more by typing out and adding
              a review to the albums on your page.</MDBAccordionItem>
            <MDBAccordionItem
              collapseId="AC3"
              headerTitle="Step 3: Share with your friends!"
              >After creating your personalized page, use your very own custom link
              to send to your friends so they can see it, too.</MDBAccordionItem>
            </MDBAccordion>
            </div>

            <form>
              <label class = "searchtext" htmlFor="user">Search for a username!</label>
              <input class = "searchbar"
              type="text"
              name="user"
              id="user"
              value={nameData.user}
              onChange={handleChange} />
            </form>

          <input type="button"  value="Search" onClick={() => checkUser(nameData.user)} />
          <br></br>
          <div id="userCreate">Don't have a page? Click below.</div>
          <br></br>
          <input name = "Create" type="button" value="Create An Account" onClick={() => navigate("/Form")} />
        </html>
      );
    }

export default Home;