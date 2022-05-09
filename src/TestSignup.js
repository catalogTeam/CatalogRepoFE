import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
                    name='password'
                    id='password'
                    value={user.password}
                    onChange={(event) => setUser({ ...user, password: event.target.value })}
                />
            </div>
            <input type='button' value='Submit' onClick={submitForm} />
            &nbsp;&nbsp;&nbsp;
            <input name = "Create" type="button" value="Login" onClick={() => navigate("/testingLogin")} />

        </div>
    );
}

export default TestSignup;