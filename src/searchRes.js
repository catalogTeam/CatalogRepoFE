import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/home.css";
import Pages from "./Tables/PageList";

function SearchPage(props) {
  var URL = 'https://musiccatalogbe.herokuapp.com';
  //var URL = "http://localhost:5000";

  let navigate = useNavigate();

  //const [pages, setPages] = useState(props.pages);

  function Submit(page) {
    props.toPage(props.Data, page);
  }

  return (
    <div>
      <input type='button' value='Home' onClick={() => navigate("/home")} />
      <header>Search Results</header>
      <Pages pages={props.pages} toPage={Submit} />  
    </div>
  );
}

export default SearchPage;
