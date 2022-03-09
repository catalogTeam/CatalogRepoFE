import React, {useState} from 'react';

import { useNavigate, BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { MDBInput } from 'mdb-react-ui-kit';
import axios from "axios";


function ReviewPage(props){

    const [reviewData, setReview] = useState({ username: props.userData.username, album: "", review: "" , rating: ""});

    async function makeReviewCall () {
        try {
          const response = await axios.post('http://localhost:5000/reviews', reviewData)
          return response
        } catch (error) {
          console.log(error)
          return false
        }
      }

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "album") setReview({ ...reviewData, album: value });
        else if (name === "review") setReview({ ...reviewData, review: value });
        else if (name === "rating") setReview({ ...reviewData, rating: value });
      }


    function submitReview(){
        const response = makeReviewCall();
        console.log(response)
        props.handleSubmit()

    }

    return(
        <div>
            <body>
                <h1>Album Review </h1>
                <label htmlFor="Username">Enter an Album</label>
                <MDBInput  type='text'
                name="album"
                id="album"
                value={reviewData.album}
                onChange={handleChange} />

                <label htmlFor="Username">Leave a short review</label>
                <MDBInput textarea rows={4}
                type='text'
                name="review"
                id="review"
                value={reviewData.review}
                onChange={handleChange} />

                <input type="button"  value="Submit Review" onClick={() => {submitReview()}} />

                </body>
        </div>
    );
}

export default ReviewPage;