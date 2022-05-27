import Header from "./Headers/PageHeader";
import AlbumCards from "./Cards/AlbumCards";
import ArtistCards from "./Cards/ArtistCards";

function ProfilePage(props) {
  function Submit() {
    props.handleSubmit(props.userData);
  }

  function edit() {
    props.toForm(props.userData, props.pageData, 1);
  }

  return (
    <div>
      <Header
        pageData={props.pageData}
        butName={"Edit Page"}
        toForm={edit}
        handleSubmit={() => Submit()}
      />
      <header>Albums</header>
      <AlbumCards albumData={props.pageData["albums"]} />
      <header>Artists</header>
      <ArtistCards artistData={props.pageData["artists"]} />
    </div>
  );
}

export default ProfilePage;
