import React from "react";

import Navbar2 from "../navbar2";
import Header from "../header";
import Contact2 from "../contact2";


const Resume = () => {
    return(
        <>
        <Navbar2/>
            <section className="resume">
                <div className="resume-content">
                    <h1 className="resume-heading">My Resume</h1>
                    <div className="underline">
                        <div className="small-underline"></div>
                        <div className="big-underline"></div>
                    </div>
                    <br/>
                    <div className="personal-particulars">
                        <h3 className="resume-sub-heading">Personal particulars</h3>
                        <p className="resume-details">Name: Han Voon</p>
                        <p className="resume-details">Age :37 years</p>
                        <p className="resume-details">Nationality :Malaysian</p>
                        <p className="resume-details">Ethnicity: Chinese</p>
                        <p className="resume-details">Gender: Male</p>      
                    </div>

                    <div className="programing-skills">
                        <h3 className="resume-sub-heading">programing Skills</h3>
                        <p className="resume-details">(1 years self-taught, no relavant field's working experience!)</p>
                        <p className="resume-details">HTML, CSS , JavaScript, React.js, Git</p>
                        <p className="resume-details">also understand the basic concepts of following:
                        NPM ,Express, SQL Basic, Nodes.js, Python ,async await,AJAX, Asynchronous Programming , Fetch API.
                        </p>

                    </div>

                    <div className="education-background">
                        
                        <h3 className="resume-sub-heading">Ecucation background</h3>
                        <p className="resume-details">(Do Not Have College Degree!)</p>
                        <p className="institution-name">KDU Management Development Center(KMDC)</p>
                        <p className="resume-details">Certificate financial planner (CFP)</p>
                        <p className="resume-details">Graduation date :June 2012</p>

                        <p className="institution-name">Graduated in Kwang Hua (private)Chinese High School,Klang</p>
                        <p className="resume-details">Unified Examination Certificate(UEC)-Equivalent with STPM</p>
                        <p className="resume-details">Graduation date :December 2002</p>

                    </div>

                    <div className="working-experience">
                    <h3 className="resume-sub-heading">Working experience</h3>
                    <p className="institution-name">Propnex realty Sdn Bhd(2016-2021)</p>
                    <p className="job-title">Real Estate Agent:</p>
                    <p className="resume-details">Helping people to buy or rent a house and sort out 
                    all issues arising from the entire process.</p>

                    <br/>

                    <p className="institution-name">Duro Metal Sdn Bhd(2014-2016)</p>
                    <p className="job-title">Sales Representative:</p>
                    <p className="resume-details">this is a metal roofing manufacturer, my job is 
                    maintain good relationship with customers to maintain regular order from customers,
                    ,to achieve sale target each month also to handling all the matters from the entire 
                    selling process and provide a quality customer service to merchant.</p>

                    <br/>

                    <p className="institution-name">ALLIANCE BANK-KL(2011-2014)</p>
                    <p className="job-title">Personal Financial Consultant:</p>
                    <p className="resume-details">Provide financial planning service, promote financial
                     products such as investment, insurance , housing loan, will writing service, credit
                    card to customers.To achieve sales target and maintain good relationship with regular customers.</p>

                    <br/>

                    <p className="institution-name">SERVTOUCH WYWY(2008-2011)</p>
                    <p className="job-title">Sales and Service representative:</p>
                    <p className="resume-details">This company is the main distributor of printing and imaging 
                    machine and meterials(Kodak,Canon).Monitor ageing status to ensure merchants make payment on time.
                    Visit merchants when dispute case arise, at the same time also visit customers regularly to build up 
                    good relationship .</p>

                    <br/>
                    <p className="institution-name">SYMPHONEY BHD(2005-2008)</p>
                    <p className="job-title">Customer Service:</p>
                    <p className="resume-details">This company is an outsourcing company in malaysia mainly on call center.
                    provide customer service for user and handling all inquiries and complaints over telephone.</p>

                    

                </div>

               

                <div className="languages-skills">
                    <h3 className="resume-sub-heading">Languages Skills</h3>
                    <ul className="lang-skill-list">
                        <li>English: good</li>
                        <li>Mandarin: very good</li>
                        <li>Bahasa Malayu: Average</li>
                    </ul>


                </div>  

                </div>


            </section>
        <Contact2/>
        </>
    )
}

export default Resume;