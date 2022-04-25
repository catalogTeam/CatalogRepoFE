import React, { useState} from "react";
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'
import './CSS/signup.css';

function SignUpPage(props){
    let navigate = useNavigate(); 

    const [user, setUser] = useState({
        username: "",
        email: "",
        pwd: "",
      });

      function handleChange(event) {
        const { name, value } = event.target;
        if (name === "email") setUser({ ...user, email: value });
        else if (name === "username") setUser({ ...user, username: value });
        else if (name === "pwd") setUser({ ...user, pwd: value });
      }

      function submitForm() {
        props.handleSubmit(user);
        setUser({username: '', email: '', pwd: ''});
        //TODO: go to user page on successful registration
    }

    return(
        <form>
        <label htmlFor="Username">Username</label>
        <input
            type="text"
            name="username"
            id="username"
            value={user.username}
            onChange={handleChange} />
        <label htmlFor="Email">Bio</label>
        <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange} />
        <label htmlFor="pwd">Password</label>
        <input
            type="text"
            name="pwd"
            id="pwd"
            value={user.pwd}
            onChange={handleChange} />
        <br></br>
        <input name = "master-button" type="button" value="Submit All" onClick={submitForm} />
        </form>      
    );
}

export default SignUpPage;
=======
import './CSS/signup.css';
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default App;
>>>>>>> login
