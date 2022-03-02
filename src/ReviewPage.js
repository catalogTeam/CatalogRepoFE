import React from "react";
import Form from "./Form";
import { useNavigate, BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { MDBInput } from 'mdb-react-ui-kit';

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
                <MDBInput id='typeText' type='text' />

                <label htmlFor="Username">Leave a short review</label>
                <MDBInput id='textAreaExample' textarea rows={4} />

                </body>
        </html>
    );
}

export default ReviewPage;