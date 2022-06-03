import React from "react";
import "../CSS/table.css";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Artist</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  var artists = props.user.artists;

  const rows = artists.map((row, index) => {
    return (
      <tr className="whitefont" key={index}>
        <td>{row.name}</td>
        <td>
          <input
            type="button"
            value="Delete"
            onClick={() => props.removeArtist(index)}
          />
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

function ArtistTable(props) {
  return (
    <div>
      <table className="whitefont">
        <TableHeader />
        <TableBody user={props.pagedata} removeArtist={props.removeArtist} />
      </table>
    </div>
  );
}

export default ArtistTable;
