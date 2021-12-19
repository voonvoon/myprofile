import React from "react";
import grandhotel from '../../resources/images/projects/grand_hotel.png'
import venue from '../../resources/images/projects/the_venue.png'
import mcity from '../../resources/images/projects/mcity.png'
import learningLog from '../../resources/images/projects/learning_log.png'
import courseDirectory from '../../resources/images/projects/courses_directory.png'
import flashCard from '../../resources/images/projects/flash_card.png'
import { Link } from 'react-router-dom';

const Contact = () => {
    return(
        <footer id="contact-id" className="footer">
            <div className="main-part">
                <div className="footer-list-wrapper">
                    <h3 className="footer-heading">My Profile</h3>
                    <ul className="footer-list">
                        <li className="footer-list-item">
                            wonghv@gmail.com
                        </li> 
                        <li className="footer-list-item">
                            Mobile: 018-379 5728
                        </li> 
                        <li className="footer-list-item">
                            Kuala Lumpur
                        </li> 
                    </ul>
                </div>

                <div className="footer-list-wrapper">
                    <h3 className="footer-heading">Explore</h3>
                    <ul className="footer-list">
                    
                        <Link to="/" style={{ textDecoration: 'none' }}>
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                Home
                            </a>
                        </li>
                        </Link>
                       
                    </ul>
                </div>

                <div className="gallery">
                    <h3 className="footer-heading">gallery</h3>
                    <div className="gallery-images">
                        <div className="image-wrapper">
                            <img src={grandhotel} className="footer-image"></img>
                        </div>
                        <div className="image-wrapper">
                            <img src={venue} className="footer-image"></img>
                        </div>
                        <div className="image-wrapper">
                            <img src={mcity} className="footer-image"></img>
                        </div>
                        <div className="image-wrapper">
                            <img src={learningLog} className="footer-image"></img>
                        </div>
                        <div className="image-wrapper">
                            <img src={courseDirectory} className="footer-image"></img>
                        </div>

                        <div className="image-wrapper">
                            <img src={flashCard} className="footer-image"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="creator-part">
                <div className="copyright-text">
                    <p>copyright &copy; 2021. My profile.All Rights Reserved</p>
                </div>

                <div className="text-right">
                    <p>Made With <i class="fas fa-heart"></i> by <span>Han Voon</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Contact;