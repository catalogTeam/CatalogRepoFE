import React from "react";
import { Form } from "react-bootstrap";

function deleteRow(list, index) {
    const updated = list.filter((i) => {
      return i !== index
    });
    list = updated;
}

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Album</th>
        <th>Artist</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  var albums = props.user.albums;

  const rows = albums.map((row, index) => {
  return (
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.artists[0].name}</td>
      <td><button onClick={() => deleteRow(albums, index)}>Delete</button></td>
    </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

function AlbumTable(props) {
  return (
    <div>
      <table>
        <TableHeader />
        <TableBody
        user={props.userdata}
      />
      </table>
    </div>

  );
}

export default AlbumTable;