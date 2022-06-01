import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardFooter,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import "../CSS/cards.css";

function CardList(props) {
  const cards = props.albums?.map((album) => {
    return (
      <MDBCard
        shadow="0"
        background="white"
        className="mb-1"
        style={{ maxWidth: "18rem" }}
      >
        <MDBCardImage src={album["images"][0].url} alt="..." position="top" />
        <MDBCardBody>
          <MDBCardTitle>{album["name"]}</MDBCardTitle>
        </MDBCardBody>
        <MDBCardFooter className="albumfont">
          <small className="text-muted text-center">
            by {album["artists"][0]["name"]}
          </small>
        </MDBCardFooter>
      </MDBCard>
    );
  });
  return <MDBCardGroup>{cards}</MDBCardGroup>;
}

export default function Cards(props) {
  return <CardList albums={props.albumData} />;
}
