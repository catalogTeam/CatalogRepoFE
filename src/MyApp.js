import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";
import axios from "axios";


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
      <Form handleSubmit={updateList} />
    </div>
  );
}

export default MyApp;
