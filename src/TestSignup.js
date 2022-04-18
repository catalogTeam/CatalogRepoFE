import React from "react";
import { useNavigate } from 'react-router-dom';

function TestSignup(){
    let navigate = useNavigate();
    return(
        <div>
            <h1>TESTING SIGNUP</h1>
            <div>            
                <label for="name">Name</label>
                &nbsp;&nbsp;&nbsp;
                <input/>
            </div>
            <div>            
                <label for="email">Email</label>
                &nbsp;&nbsp;&nbsp;
                <input/>
            </div>
            <div>            
                <label for="password">Password</label>
                &nbsp;&nbsp;&nbsp;
                <input/>
            </div>
            <button type="submit">Register</button>
            &nbsp;&nbsp;&nbsp;
            <input name = "Create" type="button" value="Login" onClick={() => navigate("/testingLogin")} />

        </div>
    );
}

export default TestSignup;