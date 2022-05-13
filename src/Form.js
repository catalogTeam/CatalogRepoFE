import React, {useState, useEffect} from 'react';
import AlbumTable from './Tables/AlbumTable';
import ArtistTable from './Tables/ArtistTable';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// Importing default pfp
import defPfp from './default.png'
import {useLocation } from 'react-router-dom';
import './CSS/template.css';


function Form(props) {  

  const location = useLocation();

  let navigate = useNavigate();

  async function makePatchCall (user) {
    try {
        const response = await axios.patch('http://localhost:5000/patch', user)
        return response
    } catch (error) {
        console.log(error)
        return false
    }
    }
    
    const [user, setUser] = useState(props.userData);
    // setUser(props.userData) <= why cant i do this man...
    // user = props.userData
    console.log(props.userData)
    const [nameData, setName] = useState({ album: "", artist: "" });
    
    const uploadImage = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setUser({ ...user, profile: base64});
    }

    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const filereader = new FileReader();
        filereader.readAsDataURL(file);

        filereader.onload = () => {
          resolve(filereader.result);
        };

        filereader.onerror = (error) => {
          reject(error);
        };
      });
    };
    
    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "bio") setUser({ ...user, bio: value });
        else if (name === "username") setUser({ ...user, username: value });
        else if (name === "profile") {
          uploadImage(event);
        }
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

      function removeAlbum(index) {
        const updated = user.albums.filter((character, i) => {
          return i !== index
        });
        setUser({ ...user, albums: updated});
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

      function removeArtist(index) {
        const updated = user.artists.filter((character, i) => {
          return i !== index
        });
        setUser({ ...user, artists: updated});
      }



    function submitForm () {

      
      console.log(user)
      //console.log(location.state.user)
      //var fullUser = {...user,...location.state.user};

      makePatchCall(user).then((response) => {
        if (response && response.status === 201) {
        const token = response.data
        
        props.handleSubmit(token, user)

        navigate(`/profile/${user.username}`);

    }
    else{
        console.log("bad response", response)
    }
  })



      
      //setUser({pagename: '', bio: '', profile_url: '', albums: [], artists: []});
    }

    return (
      <div>
      <body class="signupmain">
        <form>
        <label color="white" HtmlFor="pagename">Page Name</label>
        <input
            class = "forminput"
            type="text"
            name="pagename"
            id="pagename"
            value={user.pagename}
            placeholder="Page Name"
            onChange={handleChange} />
        <label htmlFor="Bio">Bio</label>
        <input
            class = "forminput"
            type="text"
            name="bio"
            id="bio"
            value={user.bio}
            placeholder="Whats your Bio?"

            onChange={handleChange} />
        <label htmlFor="profile">Select an Image</label>
        <div>
        {user.profile && <img src={user.profile} height="200px"/>}
        </div>
        <input
            class = "forminput"
            type="file"
            name="profile"
            id="profile"
            onChange={handleChange} />
        <label htmlFor="albums">Enter an album</label>
        <input
            class = "forminput"
            type="text"
            name="albums"
            id="albums"
            value={nameData.album}
            placeholder="Album Name"

            onChange={handleChange} />
        <AlbumTable userdata={user} deleteAlbum={removeAlbum} />
        <input text-align  = "center" name = "album-button" type="button" value="Submit Album" onClick={submitAlbum} />
        <br></br>
        <label htmlFor="artists">Enter an artist</label>
        <input
            class = "forminput"
            type="text"
            name="artists"
            id="artists"
            value={nameData.artist}
            placeholder="Artist Name"

            onChange={handleChange} />
        <ArtistTable userdata={user} removeArtist={removeArtist} />
        <input name = "artist-button" type="button" value="Submit Artist" onClick={submitArtist} />
        <br></br>
        <input name = "master-button" type="button" value="Submit Changes" onClick={submitForm} />
        </form>
    </body>
    </div>
    ); 
}


export default Form;