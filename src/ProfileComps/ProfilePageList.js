import Pages from "../Tables/PageList";
import "../CSS/ProfileView.css";

function ProfilePageList(props) {
  console.log(props.pages);

  function Submit(page) {
    console.log(page);
    props.toPage(props.userData, page);
  }

  function newPage() {
    const page = {
      owner: props.userData.username,
      pageName: "",
      bio: "",
      pagePic: "",
      albums: [],
      artists: [],
    };
    props.toForm(props.userData, page, 0);
  }

  return (
    <div>
      <header>
        <input
          type="button"
          value="Back"
          onClick={() => props.back(props.userData)}
        />
        <input type="button" value="Add Page" onClick={newPage} />
      </header>
      <h1>{props.userData.displayName}'s Pages</h1>
      <Pages pages={props.pages} toPage={Submit} />
    </div>
  );
}

export default ProfilePageList;
