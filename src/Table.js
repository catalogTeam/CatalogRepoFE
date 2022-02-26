import React from "react";
import {Link } from "react-router-dom";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Artist</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.Title}</td>
        <td>{row.Artist}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

function Table(props) {
  return (
    <div>
      {/* <li><Link to='/'>Back</Link></li> */}
      <table>
        <TableHeader />
        <TableBody
        characterData={props.characterData}
      />
      </table>
    </div>

  );
}

export default Table;