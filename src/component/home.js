import React from "react";

import Navbar from './navbar';
import Header from './header';
import About from './about';
import Projects from './projects';
import Contact from './contact';

const Home = () =>{

    return(
        <>
            <Navbar/>
            <Header/>
            <About/>
            <Projects/>
            <Contact/>
        </>
       
    )
}

export default Home;