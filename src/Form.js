import React, {useState} from 'react';
import axios from "axios";


function Form(props) {   
   const [user, setUser] = useState(
      {  
         username: '',
         bio: '',
         profile_url: '',
         album_name: '',
         artist_name: '',
         albums:[],
         artists: [],
         reviews: []
      }
   );

   var query = {
       q: ""
   }

//    const [album, setAlbum] =  useState(
//         {
//             albumname: '',
//             id: '',
//             artist: ''
//         }
//    )


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
            setUser({...user, album_name:value});

        else if(name === 'albums')
            setUser({...user, album_name:value});
            
    }

    // function handleAlbumChange(event) {
    //     const { name, value } = event.target;
            
    //     if(name === 'albums')
    //         setUser({...user, album_name:value});
    // }

    async function getAlbum(album_name) {
        try {
          const response = await axios.get(`http://localhost:5000/search/${album_name}`);
          return response.data;
        } catch (error) {
          console.log(error);
          return false;
        }
      }

    async function submitAlbum() {
        var albums = user.albums;
        var album = user.album_name;
        const album_response = await getAlbum(album);
        const album_data = album_response.result[0];
        console.log(album_data);
        albums.push(album_response);
        setUser({...user, albums:albums});
    }

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
            <label htmlFor="albums">albums</label>
        <label htmlFor="albums">Enter the artist</label>
        <input
            type="text"
            name="artists"
            id="artists"
            value={user.artist_name}
            onChange={handleChange} />
        <label htmlFor="artists">artist</label>
        <input name = "album-button" type="button" value="Submit Album" onClick={submitAlbum} />
        <input name = "master-button" type="button" value="Submit All" onClick={submitForm} />
        </form>
    ); 
}

export default Form;