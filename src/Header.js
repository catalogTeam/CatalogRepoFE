import React from 'react';
import "./header.css";

import {
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Header(props) {

  const user = props.userData

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/Home">Catalog</a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href='/reviewpage'>Make a review!</a>
              </li>
            </ul>
            <form class="d-flex input-group w-auto">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search for User"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <MDBBtn color='primary'>Search</MDBBtn>
            </form>
          </div>
        </div>
      </nav>
    <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>{user['username']}</h1>
        <h4 className='mb-3'>{user['bio']}</h4>
    </div>
    </div>
    
  );
}

