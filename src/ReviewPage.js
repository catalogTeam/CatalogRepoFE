import React, {useState} from 'react';
import './CSS/reviewpage.css';
import { MDBInput } from 'mdb-react-ui-kit';
import axios from "axios";

function ReviewPage(props){
  // var URL = 'http://localhost:5000';
  var URL = 'https://musiccatalogbe.herokuapp.com';

  if (process.env.NODE_ENV === "production"){
    URL = 'https://musiccatalogbe.herokuapp.com';
  }

    const [reviewData, setReview] = useState({ username: props.userData.username, album: "", review: "" , rating: ""});

    async function makeReviewCall () {
        try {
          const response = await axios.post(`${URL}/reviews`, reviewData)
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
        makeReviewCall().then( result => {
            console.log(result.status)
            if (result.status === 201){
                props.handleSubmit()
            }
            else {
                console.log("error in review post")
            }
            
        });
    }

    return(
        <div>
            <body>
                <h1>Album Review</h1>
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