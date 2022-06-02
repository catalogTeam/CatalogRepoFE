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

export default function Header(props) {
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
    props.search(name);
  }

  return (
    <div>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand>Catalog</MDBNavbarBrand>

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
                  value="Back to Pages"
                  onClick={props.handleSubmit}
                /> */}
                <MDBNavbarLink
                  className="linkheader"
                  active
                  aria-current="page"
                  onClick={props.handleSubmit}
                >
                  {props.butName2}
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                {/* <input
                  name="edit-button"
                  type="button"
                  value={props.butName}
                  onClick={() => props.toForm(page)}
                /> */}
                <MDBNavbarLink
                  className="linkheader"
                  active
                  aria-current="page"
                  onClick={() => props.toForm(page)}
                >
                  {props.butName}
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <input
              type="text"
              name="page"
              id="page"
              value={nameData.page}
              onChange={handleChange}
            />
            <input type="button" value="Search" onClick={search} />
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div className="p-5 text-center">
        <h1 className="biodescription">{page["pageName"]}</h1>
        {page["pagePic"] && (
          <img src={page["pagePic"]} height="200px" alt="pagepic" />
        )}
        <h1 className="biodescription">{page["bio"]}</h1>
      </div>
    </div>
  );
}
