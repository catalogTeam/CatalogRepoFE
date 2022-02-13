import React, {useState} from 'react';

function Form(props) {   
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
            <label htmlFor="albums">albums</label>
        <input type="button" value="Submit" onClick={submitForm} />
        </form>
    ); 
}

export default Form;