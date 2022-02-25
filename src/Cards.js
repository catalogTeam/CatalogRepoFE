
import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup } from 'mdb-react-ui-kit';

export default function Cards() {
  return (
    
    <MDBCardGroup>
      <MDBCard shadow='0'
      background='white'
      className='mb-1'
      style={{ maxWidth: '18rem' }}>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </MDBCardFooter>
      </MDBCard>

      <MDBCard shadow='0'
      background='white'
      className='mb-1'
      style={{ maxWidth: '18rem' }}>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/042.webp' alt='...' position='top' />
        <MDBCardBody className='w-100'>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </MDBCardFooter>
      </MDBCard>

      <MDBCard shadow='0'
      background='white'
      className='mb-1'
      style={{ maxWidth: '18rem' }}>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/042.webp' alt='...' position='top' />
        <MDBCardBody className='w-100'>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </MDBCardFooter>
      </MDBCard>


    </MDBCardGroup>
  );
}