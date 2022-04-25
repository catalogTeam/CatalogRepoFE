import Header from "./Headers/Header"
import AlbumCards from "./Cards/AlbumCards"
import ArtistCards from "./Cards/ArtistCards"
import ReviewCards from "./Cards/ReviewCards"
<<<<<<< HEAD

function ProfilePage(props){
=======
import {useLocation } from 'react-router-dom';

function ProfilePage(props){
    
    const location = useLocation();
    console.log(location.state.user);
>>>>>>> login

    
    function Submit(){
        props.handleSubmit()
    }

    return(
    <div>
<<<<<<< HEAD
        <Header userData = {props.userData} handleSubmit = {() => Submit()} />
        <header>Albums</header>
        <AlbumCards albumData = {props.userData['albums']}/>
        <header>Artists</header>
        <ArtistCards artistData = {props.userData['artists']}/>
        <header>Reviews</header>
        <ReviewCards reviewData = {props.userData['reviews']}/>
=======
        <Header userData = {location.state.user} handleSubmit = {() => Submit()} />
        <header>Albums</header>
        <AlbumCards albumData = {location.state.user['albums']}/>
        <header>Artists</header>
        <ArtistCards artistData = {location.state.user['artists']}/>
        <header>Reviews</header>
        <ReviewCards reviewData = {location.state.user['reviews']}/>
>>>>>>> login
    </div>
    );
}

export default ProfilePage;