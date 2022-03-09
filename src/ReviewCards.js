import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup } from 'mdb-react-ui-kit';




function CardList (props) {
  const cards = props.reviews?.map((review) => {
    return (
      <MDBCard shadow='0'
      background='white'
      className='mb-1'
      style={{ maxWidth: '18rem' }}>
        {/* <MDBCardImage src={review['images'][0].url} alt='...' position='top' /> */}
        <MDBCardBody>
          <MDBCardTitle>{review['album']}</MDBCardTitle>
        </MDBCardBody>
        <MDBCardBody>
          <MDBCardTitle>{review['review']}</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    );
  });
  return (
    <MDBCardGroup>
         {cards}
    </MDBCardGroup>
   );
}


export default function Cards(props) {
  return (
    <CardList reviews = {props.reviewData} />
  );
}