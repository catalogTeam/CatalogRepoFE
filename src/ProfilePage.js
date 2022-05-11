import Header from "./Headers/Header"
import AlbumCards from "./Cards/AlbumCards"
import ArtistCards from "./Cards/ArtistCards"
import ReviewCards from "./Cards/ReviewCards"
import { useLocation } from 'react-router-dom'

function ProfilePage(props){
    
    const location = useLocation();

    console.log(props)
    //console.log(location.state.user);

    
    function Submit(){
        props.handleSubmit()
    }

    return(
    <div>
        <Header userData = {props.userData} toForm = {props.toForm} handleSubmit = {() => Submit()} />
        <header>Albums</header>
        <AlbumCards albumData = {props.userData['albums']}/>
        <header>Artists</header>
        <ArtistCards artistData = {props.userData['artists']}/>
        <header>Reviews</header>
        <ReviewCards reviewData = {props.userData['reviews']}/>
    </div>
    );
}

export default ProfilePage;