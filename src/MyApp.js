import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";
import axios from "axios";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// const users = [
//   {
//     user: 'Charlie',
//     id: '123ABC',
//     profile_pic: 'profile_pic.jpg',
//     bio: 'this is a bio',

//     albums: [
//       {
//         name: 'The White Album',
//         id: '123ABC',
//         artist: 'The Beatles',
//         album_pic: 'url',
//         rating: 4.2
//       },
//       {
//         name: 'Trick',
//         id: '123ABC',
//         artist: 'Alex G',
//         album_pic: 'url',
//         rating: 4.0
//       },
//       {
//         name: 'In Rainbows',
//         id: '123ABC',
//         artist: 'Radiohead',
//         album_pic: 'url',
//         rating: 4.9
//       }
//     ],
//     artists: [
//       {
//         artist_name: 'The Beatles',
//         album_pic: 'url',
//         id: '123ABC'
//       },
//       {
//         name: 'Trick',
//         artist: 'Alex G',
//         artist_name: 'The Beatles',
//         album_pic: 'url',
//         id: '123ABC'
//       },
//       {
//         name: 'In Rainbows',
//         artist: 'Radiohead',
//         album_pic: 'url',
//         rating: 4.9
//       }
//     ]
//   }
// ];


function MyApp() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAll().then((result) => {
      if (result) setUsers(result);
    });
  }, []);

  async function fetchAll() {
    try {
      const response = await axios.get("http://localhost:5000/users");
      return response.data.users_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  async function makePostCall(person) {
    try {
      const response = await axios.post("http://localhost:5000/users", person);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function makeDeleteCall(id) {
    try {
      const response = await axios.delete("http://localhost:5000/users/" + id);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function updateList(person) {
    makePostCall(person).then((result) => {
      if (result && result.status === 201)
        setUsers([...users, result.data]);
    });
  }

  function removeOneCharacter(index) {
    const toDelete = users[index];
    makeDeleteCall(toDelete["id"]).then((result) => {
      const updated = users.filter((character, i) => {
        return i !== index;
      });
      setUsers(updated);
    });
  }

  return (
    <div className="container">
      {/* <Table characterData={users} removeCharacter={removeOneCharacter} /> */}
      <BrowserRouter>
        <nav>
        <li><Link to='/users-table'>List all</Link></li>
        </nav>
        <Routes>
          <Route
            path='/'
            element={
              <Form handleSubmit={updateList} />
            }
          />
          <Route
            path='/users-table'
            element={
              <Table characterData={users} removeCharacter={removeOneCharacter} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyApp;