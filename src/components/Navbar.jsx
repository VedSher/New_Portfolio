import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle smooth scrolling to sections
  const handleNavClick = (navId, navTitle) => {
    setActive(navTitle);
    // Remove the # if it exists in navId
    const elementId = navId.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Function to handle resume download
  const handleResumeDownload = () => {
    // Using the direct download URL format for Google Drive
    const downloadUrl = 'https://drive.google.com/file/d/16QjUJHc5dbl3RrtRF04opwkt3sv7IJRB/view?usp=sharing';
    
    try {
      // Method 1: Direct window.open
      window.open(downloadUrl, '_blank');
      
      // Method 2: Fallback with link creation
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.target = '_blank';
      link.download = 'Vaidik_Shreshth_Resume.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt='logo' className='w-30 h-30 object-contain' /> */}
          <p className='text-white text-[28px] font-bold cursor-pointer flex'>
            Vaidik Shreshth &nbsp;
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a 
                href={`#${nav.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(nav.id, nav.title);
                }}
              >
                {nav.title}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={handleResumeDownload}
              className='text-[18px] font-medium text-secondary hover:text-white cursor-pointer bg-transparent border-none outline-none'
            >
              Resume
            </button>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                >
                  <a 
                    href={`#${nav.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setToggle(!toggle);
                      handleNavClick(nav.id, nav.title);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setToggle(!toggle);
                    handleResumeDownload();
                  }}
                  className='font-poppins font-medium text-[16px] text-secondary hover:text-white cursor-pointer bg-transparent border-none outline-none'
                >
                  Resume
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;