import React,  {useState}  from 'react';
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import { FaTimes} from "react-icons/fa";
import siteLogo from  "../../assets/logos/AAELogo.png";

function Header() {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const controlMobileMenu = (e) =>{
        setToggleMobileMenu(!toggleMobileMenu);
    }
    const closeMenu = (e) =>{
        setToggleMobileMenu(false);
    }

    return (
        <>
            <header className="header_area transparent_header">
                <div className="container">
                    <div className="mobile_wrapper">
                        <div className="mobile_header">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="brand_logo">
                                       <img src={siteLogo}  alt="site logo"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="menu_button">
                                        <div className={toggleMobileMenu ? "menu_icon active" : "menu_icon"} onClick={controlMobileMenu}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={toggleMobileMenu ? "sidenav_menu active" : "sidenav_menu"}>
                            <div className="close_icon" onClick={closeMenu}>
                                <a href="#" className="close_btn"><i><FaTimes/></i></a>
                            </div>
                            <ul className="sidebar-menu">
                                <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/"> Home </NavLink></li>
                                <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/aboutme"> About Me  </NavLink></li>
                                <li>
                                        <ul className="sub-menu">
                                        <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/mywork"> My Work </NavLink></li>
                                        <li className="menu-item"><a>Skills </a></li>
                                    </ul>
                                </li>
                                <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/contact"> Contact </NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="site_menu">
                        <div className="row align-items-center">
                            <div className="row align-items-center">
                                <div className="col-lg-2"> 
                                    <div className="brand">
                                        <img src={siteLogo} className="img-fluid" alt="logo" />
                                    </div>
                                </div>

                                <div className="col-lg-10">
                                    <div className="primary_menu" id="menu">
                                        <nav className="main_menu">
                                            <ul>
                                                <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/"> Home </NavLink></li>
                                                <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/aboutme"> About Me  </NavLink></li>
                                                <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/mywork"> My Work </NavLink></li>
                                                <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/contact"> Contact </NavLink></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>    
                            </div>
                        </div>  
                    </div>
                </div>
            </header>
        </>
    )
}


export default Header;