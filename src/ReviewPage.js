import React from "react";
import Form from "./Form";
import { useNavigate, BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import Home from "./Home";
import ReactDOM from 'react-dom';
import UserPage from "./UserPage";

function ReviewPage(){

    let navigate = useNavigate(); 

    return(
        <html>
            <body>
                <h1>Album Review </h1>
                <label htmlFor="Username">Enter an Album</label>
                <input
                    type="text"
                    name="username"
                    id="username"/>
                <label htmlFor="Username">Leave a short review</label>
                <input
                    type="text"
                    name="username"
                    id="username"/>
                </body>
        </html>
    );
}

export default ReviewPage;