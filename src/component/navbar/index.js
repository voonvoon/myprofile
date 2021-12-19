import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
    // navbar
        <div className="navbar">

        <input type="checkbox" className="checkbox" id="click" hidden/>

        {/* sidebar */}
        <div className="sidebar">
            <label for="click">
                <div className="menu-icon">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
            </label>    

            <ul className="social-icons-list">
                <li>
                    <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
                </li>
                <li>
                    <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                    <a href="#" className="social-link"><i className="fab fa-google-plus-g"></i></a>
                </li>
                <li>
                    <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                </li>
            </ul>

            <div className="year">
                <p>2021</p>
            </div>

        </div>
        {/* end of sidebar */}

        {/* navigation */}
        <nav className="navigation">
            <div className="navigation-header">
                <h1 className="navigation-heading">My Profile</h1>

            </div>
            <ul className="navigation-list">
               
                <li className="navigation-item">
                    <a href="#about-us-id" className="navigation-link">About me</a>
                </li>
                <Link to="/resume" style={{ textDecoration: 'none' }} >
                <li className="navigation-item">
                    <a href="#" className="navigation-link">Resume</a>
                </li>
                </Link>
                <li className="navigation-item">
                    <a href="#projects-id" className="navigation-link">My project</a>
                </li>
                <li className="navigation-item">
                    <a href="#contact-id" className="navigation-link">Contact</a>
                </li>
            </ul>
            
            <div className="copyright">
                <p>&copy; 2021. My Profile. All Rights Reserved</p>
            </div>
        </nav>
        {/* end of navigation */}
    </div>
    // end of navbar


    )
    
}

export default Navbar;