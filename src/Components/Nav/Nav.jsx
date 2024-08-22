import React, { useRef, useEffect } from "react";
import navCSS from './../Nav/Nav.module.css';

function Nav() {

    const Menu = useRef();

    useEffect(() => {
        DarkMode(); 
    }, []);

    const DarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'Dark');
    };

    const LightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'Light');
    };

    const ThemeHandler = () => {
        if (document.querySelector('body').getAttribute('data-theme') === 'Dark') {
            LightMode();
        } else {
            DarkMode();
        }
    };

    const menuHandler = () => {
        Menu.current.classList.toggle(navCSS.activeNav);
    };

    const Navbar = useRef();
    window.addEventListener('scroll' , function() {
        if(window.scrollY > 150){
            Navbar.current.classList.add(navCSS.navbarScroll);
        }else{
            Navbar.current.classList.remove(navCSS.navbarScroll);
        }
    })

    return (
        <div className={navCSS.Nav} ref={Navbar}>
            <div className={navCSS.logo}>
                <a href="#">Vaidik</a>
            </div>
            <ul ref={Menu}>
                <li><a href="#Header"><i className="ri-home-3-line"></i> Home</a></li>
                <li><a href="#about"><i className="ri-user-line"></i> About</a></li>
                <li><a href="#Service"><i className="ri-customer-service-2-line"></i> Service</a></li>
                <li><a href="#portfolio"><i className="ri-profile-line"></i> Portfolio</a></li>
                <li><a href="#Contact"><i className="ri-phone-line"></i> Contact</a></li>
            </ul>

            <div className={navCSS.NavBtns}>
                <i className="ri-moon-line" onClick={ThemeHandler}></i>
                <i className="ri-menu-line" onClick={menuHandler}></i>
            </div>
        </div>
    );
}

export default Nav;
