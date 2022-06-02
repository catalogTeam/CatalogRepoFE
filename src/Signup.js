import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/template.css";
import defPfp from "./default.png";
var randomWords = require('random-words');

function Signup(props) {
  //var URL = 'https://musiccatalogbe.herokuapp.com';
   var URL = "http://localhost:5000";


  let navigate = useNavigate();

  const [LoginUser, setUserLogin] = useState({});

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    profile: defPfp,
    displayName: randomWords({ exactly: 2, join: '' }) + Math.floor(Math.random() * 100),
    bio: "Empty Bio",
  });

  const [message, setMsg] = useState("");

  async function makeSignupCall(user) {
    try {
      const response = await axios.post(`${URL}/signup`, user);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function makeLoginCall(LoginUser) {
    try {
      const response = await axios.post(`${URL}/login`, LoginUser);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function SubmitLogin() {
    makeLoginCall(LoginUser).then((response) => {
      if (response && response.status === 200) {
        console.log(response);
        const token = response.data;
        setUserLogin({ username: "", password: "" });
        setMsg("");
        console.log(LoginUser);
        props.handleSubmit(LoginUser, token).then(() => {
          console.log("navingating to");
          navigate(`/profile/${LoginUser.username}`);
        });

        //navigate(`/profile/${user.username}`, {state: {user: user}})
      } else {
        console.log(response);
        setMsg("Invalid login credentials!");
      }
    });
  }

  function SubmitSignup() {
    makeSignupCall(user).then((response) => {
      if (response && response.status === 201) {
        const token = response.data;
        props.handleSubmit(user, token);
        navigate(`/profile/${user.username}`);
        setUserLogin({ username: "", password: "" });
        //navigate(`/profile/${user.username}`, {state: {user: user}})
      } else {
        console.log(response);
      }
    });
  }

  return (
    <div class="mainbackground">
      <body class="signupmain">
        <div class="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div class="signup">
            <label class="testlabel" for="chk" aria-hidden="true">
              Sign Up
            </label>
            <input
              class="testinput"
              type="text"
              name="username"
              id="username"
              placeholder="User Name"
              value={user.username}
              onChange={(event) =>
                setUser({
                  ...user,
                  username: event.target.value,
                })
              }
            />
            <input
              class="testinput"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={user.email}
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
            />
            <input
              class="testinput"
              type="password"
              name="password"
              id="password"
              value={user.password}
              placeholder="Password"
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
            />
            <button class="testbutton" value="Submit" onClick={SubmitSignup}>
              Sign up
            </button>
          </div>

          <div class="login">
            <label class="testlabel" for="chk" aria-hidden="true">
              Login
            </label>
            <input
              class="testinput"
              type="text"
              name="username"
              id="username"
              value={LoginUser.username}
              placeholder="User Name"
              onChange={(event) =>
                setUserLogin({ ...LoginUser, username: event.target.value })
              }
            />
            <input
              class="testinput"
              type="password"
              name="password"
              id="password"
              value={LoginUser.password}
              placeholder="Password"
              onChange={(event) =>
                setUserLogin({ ...LoginUser, password: event.target.value })
              }
            />
            <button class="testbutton" value="Submit" onClick={SubmitLogin}>
              Login
            </button>
            <div>
              <i> {message} </i>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Signup;
