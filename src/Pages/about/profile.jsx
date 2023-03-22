import React, { useState } from "react";
import Skills from '../skills/Skills';
import './about.scss';
import Experience from "./Experience";
import Education from "./Education";

function Profile() {
    const [isOpen, setIsOpen] = useState(false);
    function toggleModalOne() {
      setIsOpen(!isOpen);
    }

    return (
       <div className="aae_about" id="about">78
            <div className="container">
                <div className="about_title">
                    <h3>About Me</h3>
                </div>
                <div className="content">

                    {/*  Left Side  */}
                    <div
                        className="leftpart"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100">
                        <div className="info">
                            <h3>
                                Hi, I'm <span>Antonio Aranda Eggermont</span>
                            </h3>
                            <p>
                                My background is in  UX engineering, technology design and applications
                                development. My technical skills are mostly around app development using
                                frameworks like Angular, ReactJS, Django, and some iOS. 
                                My programming skills include Python, JavaScript, TypeScript and some SwiftUI
                                for front-end development.
                                For backend development, I have experience developing data APIs in
                                Python/Flask and exposure to Java.
                            </p>
                        </div>
                        <div className="my_skills">
                            <h3 className="title">Technical Skills</h3>
                            <p className="desc"></p>
                            <div className="wrapper">
                                <div className="dodo_progress">
                                    <Skills />
                                </div>
                            </div>
                        </div>
                        <div className="row resume-box">
                            <div className="col-6">
                                <h3>Experience</h3>
                                <Experience />
                            </div>
                            <div className="col-6">
                              <h3>Education</h3>
                               <Education />
                            </div>
                        </div>
                    </div>
                </div>           
            </div>        
        </div>
    );
};

export default Profile;