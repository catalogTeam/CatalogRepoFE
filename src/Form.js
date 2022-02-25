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

    async function getAlbum(album_name) {
        try {
          const response = await axios.get(`http://localhost:5000/search/${album_name}`);
          return response.data;
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      async function getArtist(artist_name) {
        try {
          const response = await axios.get(`http://localhost:5000/search/${artist_name}`);
          return response.data;
        } catch (error) {
          console.log(error);
          return false;
        }
      }

    function submitForm() {
        props.handleSubmit(user);
        setUser({username: '', bio: '', profile_url: ''});
    }

    async function submitAlbum() {
        var albums = user.albums;
        var album = user.album_name;
        const album_response = await getAlbum(album);
        const album_data = album_response.result[0];
        console.log(album_data);
        albums.push(album_data);
        setUser({...user, albums:albums});
    }
<<<<<<< Updated upstream

    async function submitArtist() {
        var artists = user.artists;
        var artist = user.artist_name;
        const artist_response = await getArtist(artist);
        const artist_data = artist_response.result[0];
        console.log(artist_data);
        artists.push(artist_data);
        setUser({...user, artists:artists});
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
            <input name = "album-button" type="button" value="Submit Album" onClick={submitAlbum} />

            <label htmlFor="albums">Albums</label>
            
            <Table characterData={users} />
            {/* <input
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
                onChange={handleChange} /> */}
            <label htmlFor="albums">Enter an artist</label>
            <input
                type="text"
                name="artist"
                id="artist"
                value={user.artists.push}
                onChange={handleChange} />
            <input name = "artist-button" type="button" value="Submit Artist" onClick={submitArtist} />

            <Table2 characterData={users} />
            {/* <input
                type="text"
                name="artist"
                id="artist"
                value={user.artists.push}
                onChange={handleChange} /> */}
        <input name = "master-button" type="button" value="Submit All" onClick={submitForm} />

            </form>

        </div>
    ); 
=======
  }

  async function submitAlbum() {
    var albums = user.albums;
    var album = nameData.album;
    const album_response = await getAlbum(album);
    const album_data = album_response.result[0];
    console.log(album_data);
    albums.push(album_data);
    setUser({ ...user, albums: albums });
    setName({ album: "" });
  }

  async function submitArtist() {
    var artists = user.artists;
    var artist = nameData.artist;
    const artist_response = await getArtist(artist);
    const artist_data = artist_response.result[0];
    console.log(artist_data);
    artists.push(artist_data);
    setUser({ ...user, artists: artists });
    setName({ artist: "" });
  }

  //where we submit the website data
  function submitForm() {
    props.handleSubmit(user);
    setUser({ username: "", bio: "", profile_url: "" });
  }

  return (
    <form>
      <label htmlFor="Username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={user.username}
        onChange={handleChange}
      />
      <label htmlFor="Bio">Bio</label>
      <input
        type="text"
        name="bio"
        id="bio"
        value={user.bio}
        onChange={handleChange}
      />
      <label htmlFor="profile_url">Profile_url</label>
      <input
        type="text"
        name="profile_url"
        id="profile_url"
        value={user.profile_url}
        onChange={handleChange}
      />
      <label htmlFor="albums">Enter an album</label>
      <input
        type="text"
        name="albums"
        id="album"
        value={user.album_name}
        onChange={handleChange}
      />
      <input
        name="album-button"
        type="button"
        value="Submit Album"
        onClick={submitAlbum}
      />
      <label htmlFor="albums">albums</label>
      <label htmlFor="artists">Enter an artist</label>
      <input
        type="text"
        name="artists"
        id="artist"
        value={user.artist_name}
        onChange={handleChange}
      />
      <input
        name="artist-button"
        type="button"
        value="Submit Artist"
        onClick={submitArtist}
      />
      <label htmlFor="artists">Artist</label>
      <input
        name="master-button"
        type="button"
        value="Submit All"
        onClick={submitForm}
      />
    </form>
  );
>>>>>>> Stashed changes
}

export default Form;