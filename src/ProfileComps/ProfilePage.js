import Header from "../Headers/PageHeader";
import AlbumCards from "../Cards/AlbumCards";
import ArtistCards from "../Cards/ArtistCards";
import SearchPage from "../searchRes";

function ProfilePage(props) {
  console.log(props.userData);

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
        butName={props.butName}
        butName2={props.butName2}
        toForm={edit}
        handleSubmit={() => Submit()}
        searchPage={SearchPage}
      />
      <h1>Albums</h1>
      <AlbumCards albumData={props.pageData["albums"]} />
      <h1>Artists</h1>
      <ArtistCards artistData={props.pageData["artists"]} />
    </div>
  );
}

export default ProfilePage;
