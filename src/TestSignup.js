import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/testsignup.css';


function TestSignup(props){

    let navigate = useNavigate();

    
    const [user, setUser] = useState({
        email: '',
        username: '',
        password: ''
      })

    const [message, setMsg] = useState('');

    async function makeSignupCall (user) {
    try {
        const response = await axios.post('http://localhost:5000/signup', user)
        return response
    } catch (error) {
        console.log(error)
        return false
    }
    }


    function submitForm (props) {
    //     makeSignupCall(user).then((response) => {
    //         if (response && response.status === 201) {
    //         const token = response.data
    //         setUser({ username: '', password: '' })
    //         setMsg('')
    //         // props.setToken(token)
    //         //props.handleSubmit(user);
    //         navigate(`/form`, {state: {user: user}})
    //     }
    //     else{
    //         console.log("bad response", response)
    //     }
    // })
        navigate(`/form`, {state: {user: user}})
    }

    return(
        <html>
            <head>
                <title> Slide Navbar</title>
                <link rel="stylesheet" type="text/css" href="slide navbar style.css"></link>
                <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet"></link>
            </head>
            <body class="signupmain">
                <div class="main">
                    <div class="signup">

                    <label class="testlabel" htmlFor='name'>Sign Up</label>
                    <input
                    class="testinput"
                    type='text'
                    name='username'
                    id='username'
                    placeholder='User Name'
                    value={user.username}
                    onChange={(event) => setUser({ ...user, username: event.target.value })}
                    />     
                    <input
                    class="testinput"
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    value={user.email}
                    onChange={(event) => setUser({ ...user, email: event.target.value })}
                    />
                    <input 
                    class="testinput"
                    type='password'
                    name='password'
                    id='password'
                    value={user.password}
                    placeholder='Password'
                    onChange={(event) => setUser({ ...user, password: event.target.value })}
                    />
                    <button class="testbutton" value='Submit' onClick={submitForm}>Sign up</button>
                    </div>

                    <div class="login">
                    <label class="testlabel" for="chk" aria-hidden="true" onClick={() => navigate("/Login")}>Login</label>
 
                    </div>
                    </div>
            </body>
        </html>

    );
}

export default TestSignup;