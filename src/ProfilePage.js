import React, { useEffect } from "react";
import Header from "./Headers/Header"
import AlbumCards from "./Cards/AlbumCards"
import ArtistCards from "./Cards/ArtistCards"
import ReviewCards from "./Cards/ReviewCards"
import { useNavigate } from 'react-router-dom'
import {
    useParams
  } from "react-router-dom";

  
function ProfilePage(props){

    let navigate = useNavigate();

    let { username } = useParams();

    console.log(props.userData)

    useEffect(() => {
        console.log(username)
        if (username){
          // if (username === localStorage.getItem('username')){
            props.updatePage(username)
          // }
          // else{
          //   console.log("username does not match")
          //   navigate("/errorpage")
          // }
        }

      }, username)

    
    function toForm(){
        navigate("/form")
    }

    if (props.userData){
        return(
        <div>
            <Header userData = {props.userData} handleSubmit = {toForm} />
            <header>Albums</header>
            <AlbumCards albumData = {props.userData['albums']}/>
            <header>Artists</header>
            <ArtistCards artistData = {props.userData['artists']}/>
            <header>Reviews</header>
            <ReviewCards reviewData = {props.userData['reviews']}/>
        </div>
        );
    }
    else{
        return (
            <>
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </>
          );
    }
}

export default ProfilePage;