import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./CSS/home.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { useCookies } from 'react-cookie';
import axios from "axios";
const URL = 'https://musiccatalogbe.herokuapp.com';
// const URL = 'http://localhost:5000';

function Home(props) {
    let navigate = useNavigate();
    
    const [nameData, setName] = useState({ user: ""});

    function handleChange(event) {
      const { name, value } = event.target;
      if (name === "user") setName({ ...nameData, user: value });
    }


    async function getUser(user) {
      try {
        const response = await axios.get(`${URL}/user/${user}`)
        console.log(response)
        return response.data
      } catch (error) {
        console.log(error)
        return false
      }
    }

      async function checkUser(username){
        var user = await getUser(username);
        if (user !== false){
          props.handleSubmit(user[0])
        }
        else{
          navigate(`/errorPage`);
          console.log("no user found")
        }    
      }


    return (
      <div>
          <div>
            <title>HTML Elements Reference</title>
          </div>
          <div>
            <h1>Catalog</h1>
            <sub>Enter username below to search for a user page or create a new page</sub>
          </div>
          <div class="AC" >
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
            <label htmlFor="user">Username</label>
            <input
            type="text"
            name="user"
            id="user"
            value={nameData.user}
            onChange={handleChange} />
            <input type="button"  value="Search" onClick={() => navigate(`/user/${nameData.user}`)} />
          </form>

          <input name = "login" type="button" value="Click to Login or Sign-Up" onClick={() => navigate("/signup")} />
{/* 
          <input name = "login" type="button" value="Sign up" onClick={() => navigate("/signup")} />
          <input name = "signup" type="button" value="Log in" onClick={() => navigate("/login")} /> */}
      </div>
      );
    }

export default Home;