import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import MyApp from "./MyApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <MyApp />
  </BrowserRouter>,
  document.getElementById("root")
);
