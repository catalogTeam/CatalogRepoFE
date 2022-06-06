import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "../CSS/header.css";

export default function Header(props) {
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
    props.searchPage(name);
  }

  function submit() {
    props.handleSubmit();
  }

  return (
    <div>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <h1 className="profileheader">Catalog</h1>

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
              <MDBNavbarItem>
                {/* <input
                  name="master-button"
                  type="button"
                  value="Make a Review"
                  onClick={() => submit()}
                /> */}

                <MDBNavbarLink
                  className="linkheader"
                  active
                  onClick={() => submit()}
                >
                  Make a Review
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                {/* <input
                  name="edit-button"
                  type="button"
                  value={props.butName}
                  onClick={() => props.toForm(props.userData)}
                /> */}

                <MDBNavbarLink
                  className="linkheader"
                  active
                  aria-current="page"
                  onClick={() => props.toForm(props.userData)}
                >
                  Edit your page!
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
        <h1 className="biodescription" >{user["displayName"]}</h1>
        <img src={user["profile"]} height="200px" alt="profileimg" />
        <h1 className="biodescription" id="bio">{user["bio"]}</h1>
      </div>
    </div>
  );
}
