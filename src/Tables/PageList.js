import React from "react";
import "../CSS/pagelist.css";

function Pages(props) {
  let pageList = props.pages;

  if (pageList.length == 0) {
    return <sub>This user hasn't made any pages</sub>;
  } else {
    const rows = pageList.map((row, index) => {
      return (
        <div className="grid-container">
          <div className="main">
            <h1 className="changetextsize">{row.pageName}          
              <input
              className="margin"
              type="button"
              value="View Page"
              onClick={() => props.toPage(pageList[index])}/>
            </h1>
            <img src={row.pagePic} height="100px" />
            <label>{row.bio}</label>
          </div>
        </div>
      );
    });
    return rows;
  }
}

export default Pages;
