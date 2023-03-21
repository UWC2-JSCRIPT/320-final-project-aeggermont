import React, { useState } from "react";
import Skills from '../skills/Skills';
import ModalBackground from './modals/Background';
import './about.scss';
import Modal from "react-modal";

Modal.setAppElement("#root");

function Profile() {
    const [isOpen, setIsOpen] = useState(false);
    function toggleModalOne() {
      setIsOpen(!isOpen);
    }

    return (
       <div className="edina_tm_about" id="about">78
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
                                Hi, I'm <span>Rokers Nelson</span>
                            </h3>
                            <p>
                                I'm a Freelancer Front-end Developer with over 6 years of
                                experience. I'm from San Francisco. I code and create web
                                elements for amazing people around the world. I like work with
                                new people.
                            </p>
                        </div>
                        <div className="my_skills">
                            <h3 className="title">What is my skill level?</h3>
                            <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                                ipsum sit nibh amet egestas tellus.
                            </p>
                            <div className="wrapper">
                                <div className="dodo_progress">
                                    <Skills />
                                </div>
                            </div>
                            <div className="edina_tm_button">
                                <button
                                    type="submit"
                                    className="color"
                                    onClick={toggleModalOne}
                                >
                                See More
                                </button>
                            </div>                        
                        </div>
                    </div>

             
                    <div className="rightpart">
                        <div className="image">
                        <img src="images/thumbs/26-35.jpg" alt="thumb" />

                        <div
                            className="main"
                            style={{
                            backgroundImage: `url(${
                                process.env.PUBLIC_URL + "images/about/2.jpg"
                            })`,
                            }}
                            data-aos="fade-left"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                        ></div>

                        <div
                            className="experience"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="300"
                        >
                            <div className="info">
                            <h3>6+ Years</h3>
                            <span>Of Experiance</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*  Right Side  */}        
                </div>           
            </div>
        
              {/* Start About Details Modal */}
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal about-popup-wrapper"
                overlayClassName="custom-overlay "
                closeTimeoutMS={500}
            >
                <div className="edina_tm_modalbox">
                <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                </button>
                {/* End close icon */}

                <div className="box_inner">
                    <div className="description_wrap scrollable">
                    <ModalBackground />
                    </div>
                </div>
                {/* End box inner */}
                </div>
                {/* End modal box news */}
            </Modal>
            {/* End  About Details Modal */}
            
            
        </div>
    );
};

export default Profile;