import React from "react";
import { useNavigate} from 'react-router-dom';
import { MDBInput } from 'mdb-react-ui-kit';
import "./review.css";

function ReviewPage(){

    let navigate = useNavigate(); 

    return(
      <div class = "reviewform">
        <html>
        <header>
          <nav>
            <ul>
              <li><a href='home'>Home</a></li>
            </ul>
          </nav>
        </header>
            <body>
                <h1>Album Review </h1>
                <form class = 'Album'>
                <label htmlFor="Username">Enter an Album</label>
                <input class = 'AEntry' type='text'></input>
                </form>
                
                <form class = 'Review'>
                <label htmlFor="Username">Leave a short review</label>
                <input class = 'REntry' type='text'></input>
                </form>
            </body>
                <button id="submit" >Submit Review</button>
        </html>
        </div>
    );
}

export default ReviewPage;