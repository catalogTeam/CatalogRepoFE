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
  MDBCollapse, 
} from 'mdb-react-ui-kit';

import { useNavigate } from 'react-router-dom'



export default function Header(props) {

  let navigate = useNavigate();

  const [nameData, setName] = useState({ user: ""});

  const [showBasic, setShowBasic] = useState(false);
  
  const user = props.userData

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "user") setName({ ...nameData, user: value });
  }

  function search(){

    let name = nameData.user
    setName({ user: "" });
    navigate(`/user/${name}`)
    
  }

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
          </MDBNavbarNav>



          <form className='d-flex input-group w-auto'>
            <input
            type="text"
            name="user"
            id="user"
            value={nameData.user}
            onChange={handleChange} />
            <input type="button"  value="Search" onClick={search} />
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

