import React from "react";
import profile from "../../resources/images/profile.jpg"
import { Link } from 'react-router-dom';

const About = () => {
    return(

        // about us
        <section id ="about-us-id" className="about-us" >
            <div className="about-us-content">
                <h1 className="about-us-heading">About Me</h1>
                <div className="underline">
                    <div className="small-underline"></div>
                    <div className="big-underline"></div>
                </div>
                <h3 className="sub-heading">Han Voon</h3>
                <p className="about-us-paragraph">i started to code since end of 2020
                , never thought i can consistently do it everyday, i developed a very
                strong sense of curosity toward programing, finally found something i love 
                doing, i decided to make programing as a career path to me, this personal page will
                show you all the projects i have done by learning from tutorials and books.</p>

                <p className="about-us-paragraph"> view resume by clicking below button</p>
                <Link to="/resume">
                    <button className="resume-btn">
                        Resume
                        <i className="fas fa-angle-double-right btn-arrow"></i>
                    </button>
                </Link>
                    
            </div>

            <div className="about-us-images">
                <img src={profile} className="image image-1"></img>
            </div>
        </section>

        //end of about us

           
    )
}

export default About;