import React, {useState} from 'react';
import axios from "axios";
import AlbumTable from './AlbumTable';
import ArtistTable from './ArtistTable';


function Form(props) {   
    
    const [user, setUser] = useState({
        username: "",
        bio: "",
        profile_pic_url: "",
        albums: [],
        artists: [],
        reviews: [],
      });
    
    const [nameData, setName] = useState({ album: "", artist: "" });

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "bio") setUser({ ...user, bio: value });
        // setUser(
        //     {username: user['username'], bio: value}
        // );
        else if (name === "username") setUser({ ...user, username: value });
        else if (name === "profile_url") setUser({ ...user, profile_url: value });
        else if (name === "albums") setName({ ...nameData, album: value });
        else if (name === "artists") setName({ ...nameData, artist: value });
      }

      async function getAlbum(album_name) {
        try {
          const response = await axios.get(
            `http://localhost:5000/search/album/${album_name}`
          );
          return response.data;
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      async function getArtist(artist_name) {
        try {
          const response = await axios.get(`http://localhost:5000/search/artist/${artist_name}`);
          return response.data;
        } catch (error) {
          console.log(error);
          return false;
        }
      }


      async function submitAlbum() {
        var albums = user.albums;
        var album = nameData.album;
        const album_response = await getAlbum(album);
        const album_data = album_response.result[0];
        albums.push(album_data);
        setUser({ ...user, albums: albums });
      }
    
      async function submitArtist() {
        var artists = user.artists;
        var artist = nameData.artist;
        const artist_response = await getArtist(artist);
        const artist_data = artist_response.result[0];
        artists.push(artist_data);
        setUser({ ...user, artists: artists });
      }
    

    //where we submit the website data
    function submitForm() {
        props.handleSubmit(user);
        setUser({username: '', bio: '', profile_url: ''});
    }

    return (
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
            value={user.album_name}
            onChange={handleChange} />
        <AlbumTable userdata={user} />
        <input text-align  = "right" name = "album-button" type="button" value="Submit Album" onClick={submitAlbum} />
        <label htmlFor="artists">Enter an artist</label>
        <input
            type="text"
            name="artists"
            id="artist"
            value={user.artist_name}
            onChange={handleChange} />
        <ArtistTable userdata={user} />
        <input name = "artist-button" type="button" value="Submit Artist" onClick={submitArtist} />
        <input name = "master-button" type="button" value="Submit All" onClick={submitForm} />
        </form>
    ); 
}

export default Form;