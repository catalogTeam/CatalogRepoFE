import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

function TestLogin(props){

    const [LoginUser, setUserLogin] = useState({})
      
    const [message, setMsg] = useState('')


    function SubmitLogin () {
        makeLoginCall(LoginUser).then((response) => {
          if (response && response.status === 200) {
            console.log(response)
            const token = response.data
            setUserLogin({ username: '', password: '' })
            setMsg('')
            console.log(LoginUser)
            props.handleLogin(token, LoginUser).then(() => {
                   console.log("navingating to")
                   navigate(`/profile/${LoginUser.username}`);
                })
            
            //navigate(`/profile/${user.username}`, {state: {user: user}})
          } else {
            console.log(response)
            setMsg('Invalid login credentials!')
          }
        })
      }

    async function makeLoginCall (LoginUser) {
    try {
        const response = await axios.post('http://localhost:5000/login', LoginUser)
        return response
    } catch (error) {
        console.log(error)
        return false
    }
    }

    let navigate = useNavigate();
    return(
        <div>
            <h1>TESTING LOGIN</h1>
            <div>            
            <label htmlFor='name'>Username</label>
                &nbsp;&nbsp;&nbsp;
                <input
                type='text'
                name='username'
                id='username'
                value={LoginUser.username}
                onChange={(event) => setUserLogin({ ...LoginUser, username: event.target.value })}
                />
            </div>
            <div>            
                <label htmlFor='Password'>Password</label>
                &nbsp;&nbsp;&nbsp;
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={LoginUser.password}
                    onChange={(event) => setUserLogin({ ...LoginUser, password: event.target.value })}
                />
            </div>
            <input type='button' value='Submit' onClick={SubmitLogin} />
            &nbsp;&nbsp;&nbsp;
            <input name = "Create" type="button" value="signup" onClick={() => navigate("/signup")} />
            <div>
            <i> {message} </i>

            </div>
        </div>
    );
}

export default TestLogin;