import React, {useState} from 'react';
import axios from "axios";
import AlbumTable from './AlbumTable';
import ArtistTable from './ArtistTable';
import { useNavigate } from 'react-router-dom';
import "./Form.css";
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
          const response = await axios.get(
            `http://localhost:5000/search/artist/${artist_name}`
          );
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
        const album_data = album_response.albums.items[0]
        if (album_data !== undefined){
          albums.push(album_data);
          setUser({ ...user, albums: albums });
          setName({ album: "" });
        }
      }
    
      async function submitArtist() {
        var artists = user.artists;
        var artist = nameData.artist;
        const artist_response = await getArtist(artist);
        const artist_data = artist_response.artists.items[0]
        console.log(artist_data)
        if (artist_data !== undefined){
          artists.push(artist_data);
          setUser({ ...user, artists: artists });
          setName({ artist: "" });
        }
      }
    

    //where we submit the website data
    function submitForm() {
        props.handleSubmit(user);
        setUser({username: '', bio: '', profile_url: '', albums: [], artists: []});
        
    }
    let navigate = useNavigate();

    return (
      <div class = "form">
        <form class = "formtext">
        <header>
          <nav>
            <ul>
              <li><a href='home'>Home</a></li>
            </ul>
          </nav>
        </header>
        <h1 class = "formtext">Create A Page!</h1>
        <label class = "title" htmlFor="Username">Username</label>
        <div class = "inputcontainer">  
          <input class = "formtext"
              type="text"
              name="username"
              id="username"
              value={user.username}
              onChange={handleChange} />
        </div>

        <label class = "title" htmlFor="Bio">Bio</label>

        <div class = "inputcontainer">  
          <input class = "formtext"
              type="text"
              name="bio"
              id="bio"
              value={user.bio}
              onChange={handleChange} />
        </div>

        <label class = "title" htmlFor="profile_url">Enter profile picture URL</label>

        <div class = "inputcontainer">
          <input class = "formtext"
              type="text"
              name="profile_url"
              id="profile_url"
              value={user.profile_url}
              onChange={handleChange} />
        </div>      

        <label class = "title" htmlFor="albums">Enter an album</label>
        <div class = "inputcontainer">  
          <input class = "formtext"
              type="text"
              name="albums"
              id="albums"
              value={nameData.album}
              onChange={handleChange} />
        </div>
        
        <input text-align  = "right" name = "album-button" type="button" value="Submit Album" onClick={submitAlbum} />

        <AlbumTable userdata={user} />
        <label class = "title" htmlFor="artists">Enter an artist</label>
        <div class = "inputcontainer">  

          <input class = "formtext"
              type="text"
              name="artists"
              id="artists"
              value={nameData.artist}
              onChange={handleChange} />
        </div>

        <input name = "artist-button" type="button" value="Submit Artist" onClick={submitArtist} />

        <ArtistTable userdata={user} />
        <input name = "master-button" type="button" value="Submit All" onClick={submitForm} />
        </form>
      </div>
    ); 
}

export default Form;