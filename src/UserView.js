import Header from "./Headers/UserHeader";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CSS/ProfileView.css";

function UserView(props) {
  var URL = "http://localhost:5000";

  if (process.env.REACT_APP_URL) {
    console.log("true");
    URL = "https://musiccatalogbe.herokuapp.com";
  }

  const [user, setUser] = useState({});

  let navigate = useNavigate();

  let { username } = useParams();

  function assignUser(user) {
    setUser(user);
    console.log(user);
  }

  function Submit() {
    props.handleSubmit();
  }

  async function getUser(user) {
    try {
      const response = await axios.get(`${URL}/user/${user}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    // Update the document title using the browser API

    console.log(username);
    getUser(username).then((response) => {
      if (response !== false) {
        assignUser(response[0]);
      } else {
        navigate(`/errorPage`);
        console.log("no user found");
      }
      console.log(user);

      console.log(user["albums"]);
    });
  }, [username]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Header
        userData={user}
        butName={"Edit Profile"}
        toForm={props.toForm}
        handleSubmit={() => Submit()}
      />

      <button value="toPages">{username}'s Pages</button>
      <button value="toReviews">View Reviews</button>
    </div>
  );
}

export default UserView;
