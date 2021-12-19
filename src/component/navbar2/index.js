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

                <Link to="/" style={{ textDecoration: 'none' }}>
                <li className="navigation-item">
                    <a href="#" className="navigation-link">Home</a>
                </li>
                </Link>
                              
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