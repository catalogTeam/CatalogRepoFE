import React from "react";
import { useNavigate } from 'react-router-dom';

function TestLogin(){
    let navigate = useNavigate();
    return(
        <div>
            <h1>TESTING LOGIN</h1>
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
            <button type="submit">Log In</button>
            &nbsp;&nbsp;&nbsp;
            <input name = "Create" type="button" value="signup" onClick={() => navigate("/testingsignup")} />

        </div>
    );
}

export default TestLogin;