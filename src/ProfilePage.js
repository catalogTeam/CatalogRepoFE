import Header from "./Headers/Header"
import AlbumCards from "./Cards/AlbumCards"
import ArtistCards from "./Cards/ArtistCards"
import ReviewCards from "./Cards/ReviewCards"
import { useLocation } from 'react-router-dom'

function ProfilePage(props){
    
    const location = useLocation();
    //console.log(location.state.user);

    
    function Submit(){
        props.handleSubmit()
    }

    return(
    <div>
        <Header userData = {location.state.user} handleSubmit = {() => Submit()} />
        <header>Albums</header>
        <AlbumCards albumData = {location.state.user['albums']}/>
        <header>Artists</header>
        <ArtistCards artistData = {location.state.user['artists']}/>
        <header>Reviews</header>
        <ReviewCards reviewData = {location.state.user['reviews']}/>
    </div>
    );
}

export default ProfilePage;