import Header from "./Header"
import AlbumCards from "./AlbumCards"
import ArtistCards from "./ArtistCards"
import { cloneElement } from "react";
import "./userpage.css";

function UserPage(props){
    return(
    <div class ='userpage'>
        <body>
            {/* <title>
                props.username
            </title>
            <h1>Music Catalog</h1>
            <sub>Enter username to edit or click below to create new page</sub> */}
            <Header userData = {props.userData}/>
            <header class ="p1">Albums</header>
            <AlbumCards albumData = {props.userData['albums']}/>
            <header class ="p1">Artists</header>
            <ArtistCards class ="p1" artistData = {props.userData['artists']}/>
            <header class ="p1">Reviews</header>
        </body>
    </div>
    );
}

export default UserPage;