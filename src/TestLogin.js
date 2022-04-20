import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TestLogin(props){
    const [user, setUser] = useState({
        username: '',
        pwd: ''
      })
      
    const [message, setMsg] = useState('')


    function submitForm (props) {
        makeLoginCall(user).then((response) => {
          if (response && response.status === 200) {
            const token = response.data
            setUser({ username: '', pwd: '' })
            setMsg('')
            props.setToken(token)
            navigate(`/user/${user.username}`)
          } else {
            setMsg('Invalid login credentials!')
          }
        })
      }

    async function makeLoginCall (user) {
    try {
        const response = await axios.post('http://localhost:5000/testinglogin', user)
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
                value={user.username}
                onChange={(event) => setUser({ ...user, username: event.target.value })}
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
            <input name = "Create" type="button" value="signup" onClick={() => navigate("/testingsignup")} />
            <div>
            <i> {message} </i>

            </div>
        </div>
    );
}

export default TestLogin;