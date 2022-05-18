import React from "react";

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
        <td>
          <input
            type="button"
            value="Delete"
            onClick={() => props.removeAlbum(index)}
          />
        </td>
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
        <TableBody user={props.pagedata} removeAlbum={props.deleteAlbum} />
      </table>
    </div>
  );
}

export default AlbumTable;
