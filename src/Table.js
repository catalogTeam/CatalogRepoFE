import React from "react";
import {Link } from "react-router-dom";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Album</th>
        <th>Artist</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.Album}</td>
        <td>{row.Artist}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

function Table(props) {
  return (
    <div>
      <li><Link to='/'>Back</Link></li>
      <table>
        <TableHeader />
      <TableBody
        characterData={props.characterData}
        removeCharacter={props.removeCharacter}
      />
      </table>
    </div>

  );
}

export default Table;
