import Header from "./Header"
import AlbumCards from "./Cards/AlbumCards"
import ArtistCards from "./Cards/ArtistCards"
import ReviewCards from "./Cards/ReviewCards"

function UserPage(props){

    
    function Submit(){
        props.handleSubmit()
    }

    return(
    <div>
        <Header userData = {props.userData} handleSubmit = {() => Submit()} />
        <header>Albums</header>
        <AlbumCards albumData = {props.userData['albums']}/>
        <header>Artists</header>
        <ArtistCards artistData = {props.userData['artists']}/>
        <header>Reviews</header>
        <ReviewCards reviewData = {props.userData['reviews']}/>
    </div>
    );
}

export default UserPage;