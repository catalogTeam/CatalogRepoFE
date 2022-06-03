import { useNavigate, useParams } from "react-router-dom";
import "./CSS/home.css";
import Pages from "./Tables/PageList";
import React, { useEffect } from "react";

function SearchPage(props) {
  let navigate = useNavigate();
  let { searchName } = useParams();
  console.log(props.pages.length);
  console.log(searchName);

  useEffect(async () => {
    await props.handleSubmit(searchName);
    console.log(props.pages);
  }, [searchName]);

  function Submit(page) {
    props.toPage(props.Data, page);
  }

  if (props.pages.length) {
      return (
        <div>
          <input type="button" value="Home" onClick={() => navigate("/home")} />
          <h1>Search Results</h1>
          <Pages pages={props.pages} toPage={Submit} />
        </div>
      );
  }
  else {
      return (
        <>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </>
      );
  }
}

export default SearchPage;
