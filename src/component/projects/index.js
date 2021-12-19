import React from "react";
import grandhotel from '../../resources/images/projects/grand_hotel.png'
import venue from '../../resources/images/projects/the_venue.png'
import mcity from '../../resources/images/projects/mcity.png'
import learningLog from '../../resources/images/projects/learning_log.png'
import courseDirectory from '../../resources/images/projects/courses_directory.png'
import flashCard from '../../resources/images/projects/flash_card.png'


const Projects = () =>{
    return(
    //    projects
    <section id="projects-id" className="projects">
        <div className="common-header">
            <h1 className="common-heading">Projects completed</h1>
            <h1 className="common-heading">(By Follow Tutorial)</h1>
            <div className="underline">
                <div className="small-underline"></div>
                <div className="big-underline"></div>
            </div>
        </div>

        <div className="projects-cards-wrapper">
            <div className="project-card">
                <img src={grandhotel} className="project-img"></img>
                <div className="project-card-content">
                    <h4 className="project-card-heading">Grand Hotel</h4>
                    <p className="project-card-paragraph">Landing page for a grand hotel</p>
                    <a target="_blank" href="https://grandhotel84.netlify.app/" className="project-card-btn" >
                        View Project
                        <i className="fas fa-angle-double-right btn-arrow"></i>
                    </a>

                    <a target="_blank" href="https://github.com/voonvoon/grand-hotel" className="project-card-btn">
                        Source Code
                        <i className="fas fa-angle-double-right btn-arrow"></i>
                    </a>
                </div>
            </div>

            <div className="project-card">
                <img src={venue} className="project-img"></img>
                <div className="project-card-content">
                    <h4 className="project-card-heading">The Venue</h4>
                    <p className="project-card-paragraph">Landing page for a concert!</p>
                    <a target="_blank" href="https://the-venue-v.netlify.app/" className="project-card-btn" >
                        View Project
                        <i className="fas fa-angle-double-right btn-arrow"></i>
                    </a>

                    <a target="_blank" href="https://github.com/voonvoon/The-Venue" className="project-card-btn">
                        Source Code
                        <i className="fas fa-angle-double-right btn-arrow"></i>
                    </a>
                </div>
            </div>

            <div className="project-card">
                <img src={mcity} className="project-img"></img>
                <div className="project-card-content">
                    <h4 className="project-card-heading">M City</h4>
                    <p className="project-card-paragraph">a football club page where you can
                    view all matches and players also can upload new player and match!</p>
                    <a target="_blank" href="https://mcity-6501b.web.app/" className="project-card-btn" >
                        View Project
                        <i className="fas fa-angle-double-right btn-arrow"></i>
                    </a>

                    <a target="_blank" href="https://github.com/voonvoon/Mcity" className="project-card-btn">
                        Source Code
                        <i className="fas fa-angle-double-right btn-arrow"></i>
                    </a>
                </div>
            </div>

            <div className="project-card">
                <img src={learningLog} className="project-img"></img>
                <div className="project-card-content">
                    <h4 className="project-card-heading">Learning Log</h4>
                    <p className="project-card-paragraph">An learning log app where you can register
                    as a user and log whatever you have learned in the database!</p>
                    <a target="_blank" href="https://learning-log-220.herokuapp.com/" className="project-card-btn" >
                        View Project
                        <i className="fas fa-angle-double-right btn-arrow"></i>
                    </a>

                    <a target="_blank" href="https://github.com/voonvoon/Learning_log" className="project-card-btn">
                        Source Code
                        <i className="fas fa-angle-double-right btn-arrow"></i>
                    </a>
                </div>
            </div>

            <div className="project-card">
                <img src={courseDirectory} className="project-img"></img>
                <div className="project-card-content">
                    <h4 className="project-card-heading">Course Directory Webpage</h4>
                    <p className="project-card-paragraph">a course website where you can view all
                    course information and tutors details.</p>
                    <a target="_blank" href="https://course-directory-v.netlify.app/" className="project-card-btn" >
                        View Project
                        <i className="fas fa-angle-double-right btn-arrow"></i>
                    </a>

                    <a target="_blank" href="https://github.com/voonvoon/course-directory" className="project-card-btn">
                        Source Code
                        <i className="fas fa-angle-double-right btn-arrow"></i>
                    </a>
                </div>
            </div>

            <div className="project-card">
                <img src={flashCard} className="project-img"></img>
                <div className="project-card-content">
                    <h4 className="project-card-heading">Flash Card</h4>
                    <p className="project-card-paragraph">An flash card app where user can register their
                    name and start playing the question and answer game.</p>
                    <a target="_blank" href="https://flashcards-voon.herokuapp.com/hello" className="project-card-btn" >
                        View Project
                        <i className="fas fa-angle-double-right btn-arrow"></i>
                    </a>

                    <a target="_blank" href="https://github.com/voonvoon/flashCard" className="project-card-btn">
                        Source Code
                        <i className="fas fa-angle-double-right btn-arrow"></i>
                    </a>
                </div>
            </div>
        </div>

        


    </section>

    //    end of project
    )
}

export default Projects;