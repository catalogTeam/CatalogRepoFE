import React, {useState, useEffect} from 'react';
import AlbumTable from './Tables/AlbumTable';
import ArtistTable from './Tables/ArtistTable';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {useLocation } from 'react-router-dom';
import './CSS/template.css';


function Form(props) {  

  const location = useLocation();

  let oldName = props.pageData.pageName;

  let funcs = [makePostCall, makePutCall];
    
    const [page, setPage] = useState(props.pageData);
    console.log(props.pageData)
    const [nameData, setName] = useState({ album: "", artist: "" });
    
    const uploadImage = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setPage({ ...page, pagePic: base64});
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
        if (name === "bio") setPage({ ...page, bio: value });
        else if (name === "pageName") setPage({ ...page, pageName: value });
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
        var albums = page.albums;
        var album = nameData.album;
        const album_response = await getAlbum(album);
        const album_data = album_response.albums.items[0]
        if (album_data !== undefined){
          albums.push(album_data);
          setPage({ ...page, albums: albums });
          setName({ album: "" });
        }
      }

      function removeAlbum(index) {
        const updated = page.albums.filter((character, i) => {
          return i !== index
        });
        setPage({ ...page, albums: updated});
      }
    
      async function submitArtist() {
        var artists = page.artists;
        var artist = nameData.artist;
        const artist_response = await getArtist(artist);
        const artist_data = artist_response.artists.items[0]
        console.log(artist_data)
        if (artist_data !== undefined){
          artists.push(artist_data);
          setPage({ ...page, artists: artists });
          setName({ artist: "" });
        }
      }

      function removeArtist(index) {
        const updated = page.artists.filter((character, i) => {
          return i !== index
        });
        setPage({ ...page, artists: updated});
      }

    // function submitForm() {
    //     var fullpage = {...page,...location.state.page};
    //     console.log(fullpage)
    //     navigate(`/profile/${fullpage.pageName}`, {state: {page: fullpage}})
    //     setpage({pageName: '', bio: '', profile_url: '', albums: [], artists: []});
        
    // }

    async function makePutCall (page) {
      try {
        console.log(oldName);  
        const response = await axios.patch('http://localhost:5000/patchpage', {newPage: page, oldName: oldName});
          return response
      } catch (error) {
          console.log(error)
          return false
      }
      }

    async function makePostCall(page) {
      try {
        const response = await axios.post('http://localhost:5000/page', page);
        return response;
      }
      catch (error) {
        console.log(error);
        return false;
      }
    }

    function submitForm (backendFunc) {

      console.log(page)
      //console.log(location.state.page)
      //var fullpage = {...page,...location.state.page};
      backendFunc(page).then((response) => {
      if (response && response.status === 201) {
      const token = response.data
      
      props.handleSubmit(props.userData);
      }
      else{
          console.log("bad response", response)
      }
      });
    }

    return (
      <div>
      <body class="signupmain">
        <form>
        <label color="white" HtmlFor="pageName">Page Name</label>
        <input
            class = "forminput"
            type="text"
            name="pageName"
            id="pageName"
            value={page.pageName}
            placeholder="Page Name"
            onChange={handleChange} />
        <label htmlFor="Bio">Bio</label>
        <input
            class = "forminput"
            type="text"
            name="bio"
            id="bio"
            value={page.bio}
            placeholder="Whats your Bio?"

            onChange={handleChange} />
        <label htmlFor="profile">Select an Image</label>
        <div>
        {page.pagePic && <img src={page.pagePic} height="200px"/>}
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
        <AlbumTable pagedata={page} deleteAlbum={removeAlbum} />
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
        <ArtistTable pagedata={page} removeArtist={removeArtist} />
        <input name = "artist-button" type="button" value="Submit Artist" onClick={submitArtist} />
        <br></br>
        <input name = "master-button" type="button" value="Submit Page" onClick={() => submitForm(funcs[props.post])} />
        </form>
    </body>
    </div>
    ); 
}


export default Form;