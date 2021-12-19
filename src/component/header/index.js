import React from "react";
import myprofile from '../../resources/images/icons/myprofile.png';
import { Link } from "react-router-dom";

const Header = () =>{
    return(
    // header
    <header class="header">
        <div class="profile">
            <div>
                <img src={myprofile} width="80"/>
            </div>
            <h3 class="profile-heading">My Profile</h3>
        </div>

        <div class="banner">
            <h1 class="banner-heading">Welcome to My Profile</h1>
            <p class="banner-paragraph">Coder gonna code!</p>
            <Link to="/resume" >
            <button class="banner-button">About me</button>
            </Link>
        </div>
    </header>

    // end of header
    )
}

export default Header;