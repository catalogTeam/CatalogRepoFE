import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import Rating from "@mui/material/Rating";

function CardList(props) {
  const cards = props.reviews?.map((review) => {
    console.log(review.reviewedItem);
    return (
      <MDBCard
        shadow="0"
        background="white"
        className="mb-1"
        style={{ maxWidth: "18rem" }}
      >
        {/* <MDBCardImage src={review['images'][0].url} alt='...' position='top' /> */}
        <MDBCardBody>
          <MDBCardTitle>{review.reviewedItem["name"]}</MDBCardTitle>
        </MDBCardBody>
        <MDBCardImage
          src={review.reviewedItem["images"][0].url}
          alt="..."
          position="top"
        />
        <MDBCardBody>
          <MDBCardTitle>{review["review"]}</MDBCardTitle>
        </MDBCardBody>

        <MDBCardBody>
          <MDBCardTitle>
            {
              <Rating
                name="half-rating-read"
                value={review["rating"]}
                precision={0.5}
                readOnly
              />
            }
          </MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    );
  });
  return <MDBCardGroup>{cards}</MDBCardGroup>;
}

export default function Cards(props) {
  return <CardList reviews={props.reviewData} />;
}
