import React from "react";
import headerCSS from "../Header/Header.module.css";

import heroImg from "../../assets/profile-pic.png"

function Header(){
    return (
        <div id="Header">
            <div className={headerCSS.headerWrapper}>
                <div className={headerCSS.headerContainer}>
                    <img src={heroImg} alt="Hero-Img" className="profile-pic"/>
                    <h1>Hello 👋, I am <span>Vaidik Shreshth</span></h1>
                    <p>Welcome to my portfolio I m <strong>Front End React Developer</strong> based in India.<br/> With  Over 3 Years of Experience.</p>
                    
                    <div className={headerCSS.social}>
                        <i className="ri-facebook-line"></i>
                        <i className="ri-instagram-line"></i>
                        <i class="ri-twitter-line"></i>
                        <i className="ri-github-line"></i>
                        <i className="ri-linkedin-line"></i>
                    </div>
                </div>
                <button>Download CV

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    )
}

export default Header;