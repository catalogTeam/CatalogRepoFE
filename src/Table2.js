import React from "react";

function Table2Header() {
  return (
    <thead>
      <tr>
        <th>Artist</th>
      </tr>
    </thead>
  );
}

function Table2Body(props) {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.Artist}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

function Table2(props) {
  return (
    <div>
      {/* <li><Link to='/'>Back</Link></li> */}
      <table>
        <Table2Header />
        <Table2Body
        characterData={props.characterData}
      />
      </table>
    </div>

  );
}

export default Table2;
