import React from "react";
import "../CSS/pagelist.css";

function Pages(props) {
  let pageList = props.pages;

  if (pageList.length === 0) {
    return <sub>This user hasn't made any pages</sub>;
  } else {
    const rows = pageList.map((row, index) => {
      return (
        <div>
          <h1 className="changetextsize">{row.pageName}</h1>
          <img src={row.pagePic} height="100px" alt="some value" />
          <h2>{row.bio}</h2>
          <input
            type="button"
            value="View Page"
            onClick={() => props.toPage(pageList[index])}
          />
        </div>
      );
    });
    return rows;
  }
}

export default Pages;
