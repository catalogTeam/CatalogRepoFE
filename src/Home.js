import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./CSS/home.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

function Home(props) {
    let navigate = useNavigate();

    
    const [nameData, setName] = useState({ user: ""});

    function handleChange(event) {
      const { name, value } = event.target;
      if (name === "user") setName({ ...nameData, user: value });
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

          <input name = "Create" type="button" value="Create A Page" onClick={() => navigate("/Form")} />


      </div>
      );
    }

export default Home;