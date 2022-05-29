import Header from "./Headers/PageHeader";
import AlbumCards from "./Cards/AlbumCards";
import ArtistCards from "./Cards/ArtistCards";

function ProfilePage(props) {
  function Submit() {
    props.handleSubmit(props.userData);
  }

  function edit() {
    props.toForm(props.userData);
  }

  return (
    <div>
      <Header
        pageData={props.pageData}
        butName={"Edit Page"}
        toForm={edit}
        handleSubmit={() => Submit()}
      />
      <h1>Albums</h1>
      <AlbumCards albumData={props.pageData["albums"]} />
      <h1>Artists</h1>
      <ArtistCards artistData={props.pageData["artists"]} />
    </div>
  );
}

export default ProfilePage;
