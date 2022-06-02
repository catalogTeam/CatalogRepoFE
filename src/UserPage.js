import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Headers/UserHeader";
import AlbumCards from "./Cards/AlbumCards";
import ArtistCards from "./Cards/ArtistCards";
import ReviewCards from "./Cards/ReviewCards";

function UserPage(props) {
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
    getUser(username).then(
      (response) => {
        if (response !== false) {
          assignUser(response[0]);
        } else {
          navigate(`/errorPage`);
          console.log("no user found");
        }
      },
      [username]
    );
  });

  return (
    <div>
      <Header userData={user} handleSubmit={() => Submit()} />
      <header>Albums</header>
      <AlbumCards albumData={user["albums"]} />
      <header>Artists</header>
      <ArtistCards artistData={user["artists"]} />
      <header>Reviews</header>
      <ReviewCards reviewData={user["reviews"]} />
    </div>
  );
}

export default UserPage;
