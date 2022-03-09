import Header from "./Header"
import AlbumCards from "./AlbumCards"
import ArtistCards from "./ArtistCards"
import { cloneElement } from "react";

function UserPage(props){

    
    function Submit(){
        props.handleSubmit()
    }

    return(
    <body>
        {/* <title>
            props.username
        </title>
        <h1>Music Catalog</h1>
        <sub>Enter username to edit or click below to create new page</sub> */}
        {/* <Header userData = {props.userData} handleSumbit= {props.handleSubmit()}/> */}
        <Header userData = {props.userData} handleSubmit = {() => Submit()} />
        <header>Albums</header>
        <AlbumCards albumData = {props.userData['albums']}/>
        <header>Artists</header>
        <ArtistCards artistData = {props.userData['artists']}/>
        <header>Reviews</header>

    </body>
    );
}

export default UserPage;