import React from "react";
import Form from "./Form";
import { useNavigate, BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { MDBInput } from 'mdb-react-ui-kit';
import "./review.css";

function ReviewPage(){

    let navigate = useNavigate(); 

    return(
      <div class = "reviewform">
        <html>
            <body>
                <h1>Album Review 
                <input name = "artist-button" type="button" value="Home" onClick={() => navigate('/home')} />

                </h1>
                <label htmlFor="Username">Enter an Album</label>
                <MDBInput id='typeText' type='text' />

                <label htmlFor="Username">Leave a short review</label>
                <MDBInput id='textAreaExample' textarea rows={4} />

                </body>
        </html>
        </div>
    );
}

export default ReviewPage;