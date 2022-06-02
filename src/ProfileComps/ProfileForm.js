import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Importing default pfp
import "../CSS/template.css";

function ProfileForm(props) {
  var URL = "http://localhost:5000";

  if (process.env.REACT_APP_URL) {
    console.log("true");
    URL = "https://musiccatalogbe.herokuapp.com";
  }

  let navigate = useNavigate();

  const [user, setUser] = useState(props.userData);
  // setUser(props.userData) <= why cant i do this man...
  // user = props.userData
  console.log(props.userData);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setUser({ ...user, profile: base64 });
  };

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
    else if (name === "displayName") setUser({ ...user, displayName: value });
    else if (name === "profile") {
      uploadImage(event);
    }
  }

  async function makePutCall(user) {
    try {
      console.log(user);
      const response = await axios.patch(`${URL}/patchprofile`, user);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function submitForm() {
    console.log(user);
    //console.log(location.state.user)
    //var fullUser = {...user,...location.state.user};

    makePutCall(user).then((response) => {
      if (response && response.status === 201) {
        const token = response.data;

        props.handleSubmit(user, token);

        navigate(`/profile/${user.username}`);
      } else {
        console.log("bad response", response);
      }
    });
  }

  return (
    <div>
      <body class="profileEdit">
        <form>
          <label color="black" HtmlFor="pagename">
            Display Name
          </label>
          <input
            class="forminput"
            type="text"
            name="displayName"
            id="displayName"
            value={user.displayName}
            placeholder="Page Name"
            onChange={handleChange}
          />
          <label htmlFor="Bio">Bio</label>
          <input
            class="forminput"
            type="text"
            name="bio"
            id="bio"
            value={user.bio}
            placeholder="Whats your Bio?"
            onChange={handleChange}
          />
          <label htmlFor="profile">Edit Profile Picture</label>
          <div>
            {user.profile && (
              <img src={user.profile} height="200px" alt="some value" />
            )}
          </div>
          <input
            class="forminput"
            type="file"
            name="profile"
            id="profile"
            onChange={handleChange}
          />
          <br></br>
          <input
            name="master-button"
            type="button"
            value="Submit Changes"
            onClick={submitForm}
          />
        </form>
      </body>
    </div>
  );
}

export default ProfileForm;
