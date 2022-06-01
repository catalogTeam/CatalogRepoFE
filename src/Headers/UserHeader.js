import React, { useState } from "react";
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
} from "mdb-react-ui-kit";
import "../CSS/header.css";

import { useNavigate } from "react-router-dom";

export default function Header(props) {
  let navigate = useNavigate();

  const [nameData, setName] = useState({ user: "" });

  const [showBasic, setShowBasic] = useState(false);

  const user = props.userData;

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "user") setName({ ...nameData, user: value });
  }

  function search() {
    let name = nameData.user;
    setName({ user: "" });
    navigate(`/user/${name}`);
  }

  return (
    <div>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Catalog</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink
                  className="linkheader"
                  active
                  aria-current="page"
                  href="/home"
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <input
              type="text"
              name="user"
              id="user"
              value={nameData.user}
              onChange={handleChange}
            />
            <input type="button" value="Search" onClick={search} />
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div className="p-5 text-center">
        <h1 className="biodescription">{user["displayName"]}</h1>
        <img src={user["profile"]} height="200px" alt="profilepic" />
        <h1 className="biodescription">{user["bio"]}</h1>
      </div>
    </div>
  );
}
