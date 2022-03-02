import Header from "./Header"
import AlbumCards from "./AlbumCards"
import { cloneElement } from "react";
function UserPage(props){
    
    return(
    <div>
        {/* <title>
            props.username
        </title>
        <h1>Music Catalog</h1>
        <sub>Enter username to edit or click below to create new page</sub> */}
        <Header userData = {props.userData}/>
        <header>Albums</header>
        <AlbumCards albumData = {props.userData['albums']}/>
        <header>Artists</header>
        <AlbumCards albumData = {props.userData['artists']}/>
        <header>Reviews</header>
    </div>
    );
}

export default UserPage;