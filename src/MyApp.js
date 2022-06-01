import React, { useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Form from "./Form";
import axios from "axios";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import ReviewPage from "./ReviewPage";
import ProfilePage from "./ProfilePage";
import ProfileForm from "./ProfileForm";
import { useCookies } from "react-cookie";
import ProfileView from "./ProfileView";
import ProfilePageList from "./ProfilePageList";
import UserView from "./UserView";
import Signup from "./Signup";

function MyApp() {
  var URL = "http://localhost:5000";
  //var URL = "https://musiccatalogbe.herokuapp.com";
  if (process.env.REACT_APP_URL){
    console.log("true");
    URL = "https://musiccatalogbe.herokuapp.com";
  }

  const [user, setUser] = useState({});

  const [page, setPage] = useState({});

  const [post, setPost] = useState({});

  const [cookies, setCookie] = useCookies(["auth_token"]);

  let navigate = useNavigate();

  function setToken(token) {
    setCookie("auth_token", token, {
      maxAge: 1800,
      path: "/",
    });
    console.log(cookies);
  }

  async function changeUser(username, token) {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      console.log("nameee");
      console.log(username);
      const response = await axios.get(`${URL}/user/${username}`, config);
      console.log(response.data[0]);
      return response.data[0];
    } catch (error) {
      // We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  function assignUser(user) {
    setUser(user);
    console.log(user);
    navigate(`/profile/${user.username}`);
  }

  async function toForm(user, page, post) {
    setUser(user);
    setPage(page);
    setPost(post);
    navigate(`/form`);
  }

  async function toProfForm(user) {
    setUser(user);
    navigate("/profile/form");
  }

  async function toPagesView(user) {
    setUser(user);
    // Get pages
    try {
      let response = await axios.get(`${URL}/pages/${user.username}`);
      setPage(response.data);
      navigate(`/profile/pages/${user.username}`);
    } catch (error) {
      console.log(error);
    }
  }

  async function backToUser(user) {
    setUser(user);
    navigate(`/profile/${user.username}`);
  }

  async function toPage(user, page) {
    setUser(user);
    setPage(page);
    navigate(`/profile/page/${page.pageName}`);
  }

  async function postSignedInUser(userData, token) {
    console.log(userData);

    setToken(token);

    setUser(userData);
  }

  async function updateUser(username) {
    console.log("success");

    console.log(localStorage.getItem("username"));

    const name = localStorage.getItem("username");

    changeUser(name).then((result) => {
      if (result) {
        setUser(result);
        console.log(user);
      }
    });
  }

  async function setData(userData, token) {
    localStorage.setItem("username", userData.username);

    console.log("setting" + localStorage.getItem("username"));

    setUser(userData);

    setToken(token);
  }

  function toReviewPage() {
    navigate(`/review`);
  }

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />

        <Route
          path="/form"
          element={
            <Form
              userData={user}
              pageData={page}
              post={post}
              handleSubmit={toPagesView}
            />
          }
        />

        <Route
          exact
          path="/profile/form"
          element={
            <ProfileForm userData={user} handleSubmit={postSignedInUser} />
          }
        />

        <Route path="/home" element={<Home handleSubmit={assignUser} />} />

        <Route
          path="/profile/:username"
          element={
            <ProfileView
              userData={user}
              handleUser={updateUser}
              toForm={toProfForm}
              toReview={toReviewPage}
              handleSubmit={toReviewPage}
              toPages={toPagesView}
            />
          }
        />

        <Route
          path="/profile/pages/:username"
          element={
            <ProfilePageList
              userData={user}
              pages={page}
              toPage={toPage}
              toForm={toForm}
              back={backToUser}
            />
          }
        />

        <Route
          path="/profile/page/:username"
          element={
            <ProfilePage
              userData={user}
              pageData={page}
              toForm={toForm}
              handleSubmit={toPagesView}
            />
          }
        />

        <Route
          path="/user/:username"
          element={<UserView handleSubmit={toReviewPage} />}
        />

        <Route path="/review" element={<ReviewPage userData={user} />} />

        <Route path="/signup" element={<Signup handleSubmit={setData} />} />

        <Route path="*" element={<ErrorPage />} />

        {/* <Route path='/login' element={ <TestLogin handleLogin = {toSignedInUser} />} /> */}
      </Routes>
    </div>
  );
}

export default MyApp;
