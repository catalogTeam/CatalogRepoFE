import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";
import axios from "axios";

const users = [
  {
    user: "Charlie",
    id: "123ABC",
    profile_pic: "profile_pic.jpg",
    bio: "this is a bio",

    albums: [
      {
        name: "The White Album",
        id: "123ABC",
        artist: "The Beatles",
        album_pic: "url",
        rating: 4.2,
      },
      {
        name: "Trick",
        id: "123ABC",
        artist: "Alex G",
        album_pic: "url",
        rating: 4.0,
      },
      {
        name: "In Rainbows",
        id: "123ABC",
        artist: "Radiohead",
        album_pic: "url",
        rating: 4.9,
      },
    ],
    artists: [
      {
        artist_name: "The Beatles",
        album_pic: "url",
        id: "123ABC",
      },
      {
        name: "Trick",
        artist: "Alex G",
        artist_name: "The Beatles",
        album_pic: "url",
        id: "123ABC",
      },
      {
        name: "In Rainbows",
        artist: "Radiohead",
        album_pic: "url",
        rating: 4.9,
      },
    ],
  },
];

function MyApp() {
  

  return (
    <div className="container">
      {/* <Table characterData={users} removeCharacter={removeOneCharacter} /> */}
      <Form handleSubmit={updateList} />
    </div>
  );
}

export default MyApp;