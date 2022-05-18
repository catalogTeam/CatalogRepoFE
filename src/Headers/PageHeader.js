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

import { useNavigate } from "react-router-dom";

export default function Header(props) {
  let navigate = useNavigate();

  const [nameData, setName] = useState({ page: "" });

  const [showBasic, setShowBasic] = useState(false);

  const page = props.pageData;

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "page") setName({ ...nameData, page: value });
  }

  function search() {
    let name = nameData.page;
    setName({ page: "" });
    navigate(`/page/${name}`);
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
                <MDBNavbarLink active aria-current="page" href="/home">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <input
                  name="master-button"
                  type="button"
                  value="Back to Pages"
                  onClick={props.handleSubmit}
                />
              </MDBNavbarItem>
              <MDBNavbarItem>
                <input
                  name="edit-button"
                  type="button"
                  value={props.butName}
                  onClick={() => props.toForm(page)}
                />
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <input
                type="text"
                name="page"
                id="page"
                value={nameData.page}
                onChange={handleChange}
              />
              <input type="button" value="Search" onClick={search} />
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div className="p-5 text-center">
        <h1 className="mb-3">{page["pageName"]}</h1>
        <img src={page["pagePic"]} height="200px" />
        <h4 className="mb-3">{page["bio"]}</h4>
      </div>
    </div>
  );
}
