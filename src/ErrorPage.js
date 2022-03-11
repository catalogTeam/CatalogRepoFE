import React from "react";
import Form from "./Form";
import { useNavigate, BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './ErrorPage.css';

import Home from "./Home";
import ReactDOM from 'react-dom';
import UserPage from "./UserPage";

function ErrorPage(){
    
    function createPage(page){
        ReactDOM.render(page, document.getElementById('root'));
    }

    let navigate = useNavigate(); 

    return(
        <html className="error">
            <body>
                <h1>User page not found</h1>
                <sub>Try again or create new user page by going back to the home page!</sub>
                <html>
                    <button id="HomeB" onClick={() => navigate("/Home")}>Home Page</button>
                </html>
            </body>
        </html>
    );
}

export default ErrorPage;