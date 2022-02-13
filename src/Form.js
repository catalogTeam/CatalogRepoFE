import React, {useState, useEffect} from 'react';
import Table from "./Table";
import axios from "axios";
import Table2 from "./Table2";

function Form(props) {
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

   const [user, setUser] = useState(
      {  
         username: '',
         bio: '',
         profile_url: '',
         albums:[],
         artists: [],
         reviews: []
      }
   );


    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "bio")
            setUser({...user, bio:value});
            // setUser(
            //     {username: user['username'], bio: value}
            // );
        else if (name === 'username')
            setUser({...user, username:value});

        else if(name === 'profile_url')
            setUser({...user, profile_url:value});
            
        else if(name === 'albums')
            setUser({...user, albums:value});
    }

    function submitForm() {
        props.handleSubmit(user);
        setUser({username: '', bio: '', profile_url: ''});
    }

    return (
        <div>
            <form>
            <label htmlFor="Username">Username</label>
            <input
                type="text"
                name="username"
                id="username"
                value={user.username}
                onChange={handleChange} />
            <label htmlFor="Bio">Bio</label>
            <input
                type="text"
                name="bio"
                id="bio"
                value={user.bio}
                onChange={handleChange} />
            <label htmlFor="profile_url">Profile_url</label>
            <input
                type="text"
                name="profile_url"
                id="profile_url"
                value={user.profile_url}
                onChange={handleChange} />
            <label htmlFor="albums">Enter an album</label>
            <input
                type="text"
                name="albums"
                id="album"
                value={user.albums}
                onChange={handleChange} />
                
            <label htmlFor="albums">Albums</label>
            <Table characterData={users} />
            <input
                type="text"
                name="title"
                id="title"
                value={user.title}
                onChange={handleChange} />
            <input
                type="text"
                name="artist"
                id="artist"
                value={user.artists.push}
                onChange={handleChange} />
            <label htmlFor="albums">Enter an artist</label>
            <input
                type="text"
                name="artist"
                id="artist"
                value={user.artists.push}
                onChange={handleChange} />
            <Table2 characterData={users} />
            <input
                type="text"
                name="artist"
                id="artist"
                value={user.artists.push}
                onChange={handleChange} />
            </form>

        </div>
    ); 
}

export default Form;