import React from "react";

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
  var albums = props.user.albums;

  const rows = albums.map((row, index) => {
  return (
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.artistName}</td>
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