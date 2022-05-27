import React, { useState } from "react";
import "./CSS/reviewpage.css";
import { MDBInput, MDBScrollspyNavLink } from "mdb-react-ui-kit";
import axios from "axios";
import UserPage from "./UserPage";
import AlbumTable from "./Tables/AlbumTable";
import { useNavigate, Navigate } from "react-router-dom";

function ReviewPage(props) {
  const [user, setUser] = useState({ albums: [] });

  const [album, setAlbum] = useState({ album_name: "" });

  const [reviewData, setReview] = useState({
    owner: props.userData.username,
    content: "",
    rating: "",
    reviewedItem: "",
  });

  let navigate = useNavigate();

  var URL = "http://localhost:5000";

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "album_name") setAlbum({ ...album, album_name: value });
    //else if (name === "album") setReview({ ...reviewData, album: value });
    else if (name === "review") setReview({ ...reviewData, review: value });
    else if (name === "rating") setReview({ ...reviewData, rating: value });
  }

  function removeAlbum(index) {
    const updated = user.albums.filter((character, i) => {
      return i !== index;
    });
    setUser({ ...user, albums: updated });
  }

  async function getAlbum(album_name) {
    try {
      const response = await axios.get(`${URL}/search/album/${album_name}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function submitAlbum() {
    const name = album.album_name;
    const album_response = await getAlbum(name);
    console.log(name);
    const album_data = album_response.albums.items[0];
    if (album_data !== undefined) {
      setReview({ ...reviewData, reviewedItem: album_data });
      setUser({ ...user, albums: [album_data] });
    }
  }

  async function makeReviewCall() {
    console.log(reviewData);
    try {
      const response = await axios.post(`${URL}/reviews`, reviewData);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function submitReview() {
    console.log(reviewData);
    if (user.albums) {
      makeReviewCall().then((result) => {
        console.log(result.status);
        if (result.status === 201) {
          // const newUser = props.userData
          // const revList = newUser.reviews
          // revList.push(reviewData)
          // newUser.reviews = revList
          // props.handleSubmit(newUser)
          navigate(`/profile/${props.userData.username}`);
        } else {
          console.log("error in review post");
        }
      });
    }
  }

  return (
    <div>
      <body>
        <label htmlFor="albums">Enter an album</label>
        <input
          class="forminput"
          type="text"
          name="album_name"
          id="album_name"
          value={album.album_name}
          placeholder="Album Name"
          onChange={handleChange}
        />
        <AlbumTable pagedata={user} deleteAlbum={removeAlbum} />
        <input
          text-align="center"
          name="album-button"
          type="button"
          value="Submit Album"
          onClick={submitAlbum}
        />

        <label htmlFor="Username">Leave a short review</label>
        <MDBInput
          textarea
          rows={4}
          type="text"
          name="review"
          id="review"
          value={reviewData.review}
          onChange={handleChange}
        />

        <input
          type="button"
          value="Submit Review"
          onClick={() => {
            submitReview();
          }}
        />
      </body>
    </div>
  );
}
export default ReviewPage;
