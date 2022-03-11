import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse
} from 'mdb-react-ui-kit';


export default function Header(props) {
  const [showBasic, setShowBasic] = useState(false);
  
  const user = props.userData

  function submit(){
    props.handleSubmit()
  }

  return (
    <div>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Catalog</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/home'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <input name = "master-button" type="button" value="Make a Review" 
        onClick={() => submit()} 
      />
            </MDBNavbarItem>
          </MDBNavbarNav>



          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <div className='p-5 text-center'>
        <h1 className='mb-3'>{user['username']}</h1>
        <h4 className='mb-3'>{user['bio']}</h4>
    </div>
    </div>
    
  );
}

