import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import "../CSS/cards.css";

function CardList(props) {
  const cards = props.artists?.map((artist) => {
    return (
      <MDBCard
        shadow="0"
        background="white"
        className="mb-1"
        style={{ maxWidth: "18rem" }}
      >
        {artist["images"].length > 0 && (
          <MDBCardImage
            src={artist["images"][0].url}
            alt="..."
            position="top"
          />
        )}
        <MDBCardBody>
          <MDBCardTitle className=" fontsize">{artist["name"]}</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    );
  });
  return <MDBCardGroup>{cards}</MDBCardGroup>;
}

export default function Cards(props) {
  console.log(props);
  return <CardList artists={props.artistData} />;
}
