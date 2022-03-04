import Header from "./Header"
import AlbumCards from "./AlbumCards"
import { useParams, useNavigate, BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { cloneElement } from "react";
import Form from "./Form";



function UserPage(props){
    let navigate = useNavigate;
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