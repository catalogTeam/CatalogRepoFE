import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/home.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

function Home(props) {
  var URL = "http://localhost:5000";

  if (process.env.REACT_APP_URL) {
    console.log("true");
    URL = "https://musiccatalogbe.herokuapp.com";
  }
  console.log(URL);
  console.log(process.env.NODE_ENV);

  let navigate = useNavigate();

  const [nameData, setName] = useState({ user: "" });

  const [message, setMsg] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "user") {
      setName({ ...nameData, user: value });
      setMsg("");
    }
  }

  function handleSearch(pagename) {
    props.searchPage(pagename).then((result) => {
      console.log(result);
      if (result) {
        setMsg("No pages similar to: " + pagename);
      }
    });
  }

  return (
    <div>
      <div>
        <title>HTML Elements Reference</title>
      </div>
      <div>
        <h1 className="homeheader">Catalog</h1>
        <sub className="subcolor">
          Enter page name below to search for a user page or create a new user
          and make your own pages
        </sub>
      </div>
      <div>
        <MDBAccordion initialActive="AC1">
          <MDBAccordionItem
            collapseId="AC1"
            headerTitle="Step 1: Enter a username, bio, and picture"
          >
            Make it your page by adding a username, bio, and picture to give it
            that charm that only you can give.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId="AC2"
            headerTitle="Step 2: List your favorite Artists and Ablums"
          >
            Using our page creater you can easily type in any artist or album
            and have it added to your page. Customize it even more by typing out
            and adding a review to the albums on your page.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId="AC3"
            headerTitle="Step 3: Share with your friends!"
          >
            After creating your personalized page, use your very own custom link
            to send to your friends so they can see it, too.
          </MDBAccordionItem>
        </MDBAccordion>
      </div>
      <form>
        <label htmlFor="user">Search Page Name</label>
        <input
          className="buttonspace"
          type="text"
          name="user"
          id="user"
          value={nameData.user}
          onChange={handleChange}
        />
        <input
          className="buttonspace"
          type="button"
          value="Search"
          onClick={() => handleSearch(nameData.user)}
        />
        <br></br>
        <i> {message} </i>
      </form>

      <input
        name="login"
        type="button"
        value="Click to Login or Sign-Up"
        onClick={() => navigate("/signup")}
      />
      {/* 
          <input name = "login" type="button" value="Sign up" onClick={() => navigate("/signup")} />
          <input name = "signup" type="button" value="Log in" onClick={() => navigate("/login")} /> */}
    </div>
  );
}

export default Home;
