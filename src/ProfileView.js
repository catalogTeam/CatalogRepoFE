import Header from "./Headers/Header";
import { useLocation } from "react-router-dom";
import "./CSS/ProfileView.css";

function ProfileView(props) {
  const location = useLocation();

  console.log(props.userData);

  function Submit() {
    props.handleSubmit();
  }

  return (
    <div>
      <Header
        userData={props.userData}
        butName={"Edit Profile"}
        toForm={props.toForm}
        handleSubmit={() => Submit()}
      />

      <button value="toPages" onClick={() => props.toPages(props.userData)}>
        View Pages
      </button>
      <button value="toReviews">View Reviews</button>
    </div>
  );
}

export default ProfileView;
