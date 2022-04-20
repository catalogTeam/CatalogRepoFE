import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function TestSignup(props){
    const [user, setUser] = useState({
        email: '',
        username: '',
        pwd: ''
      })

    const [message, setMsg] = useState('');

    async function makeSignupCall (user) {
    try {
        const response = await axios.post('http://localhost:5000/testingsignup', user)
        return response
    } catch (error) {
        console.log(error)
        return false
    }
    }


    function submitForm (props) {
    makeSignupCall(user).then((response) => {
        if (response && response.status === 200) {
        const token = response.data
        setUser({ username: '', pwd: '' })
        setMsg('')
        props.setToken(token)
        navigate(`/user/${user.username}`)
        }
    })
    }
    let navigate = useNavigate();
    return(
        <div>
            <h1>TESTING SIGNUP</h1>
            <div>            
                <label htmlFor='name'>Username</label>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                <input
                type='text'
                name='username'
                id='username'
                value={user.username}
                onChange={(event) => setUser({ ...user, username: event.target.value })}
                />
            </div>
            <div>            
            <label htmlFor='Email'>Email</label>
                &nbsp;&nbsp;&nbsp;
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={user.email}
                    onChange={(event) => setUser({ ...user, email: event.target.value })}
                />
            </div>
            <div>            
            <label htmlFor='Password'>Password</label>
                &nbsp;&nbsp;&nbsp;
                <input
                    type='password'
                    name='pwd'
                    id='pwd'
                    value={user.pwd}
                    onChange={(event) => setUser({ ...user, pwd: event.target.value })}
                />
            </div>
            <input type='button' value='Submit' onClick={submitForm} />
            &nbsp;&nbsp;&nbsp;
            <input name = "Create" type="button" value="Login" onClick={() => navigate("/testingLogin")} />

        </div>
    );
}

export default TestSignup;