import React from 'react'
import aboutCSS from "../About/About.module.css";
import img from "../../assets/bg-icon.png";

function About() {
  return (
    <div className={`${aboutCSS.AboutWrapper} section`} id='about'>
        <div className={aboutCSS.aboutContainer}>
            <h2>About Me</h2>
            <p>I am Vaidik Shreshth.I am a web development student at KIIT University with hands-on experience in UI/UX design and development. I have worked extensively with React and Next.js, gaining a strong foundation in building dynamic and responsive web applications. My experience also includes working with the MERN stack (MongoDB, Express.js, React, Node.js), where I have developed full-stack applications that efficiently handle both front-end and back-end operations. My background reflects a solid understanding of modern web technologies and a commitment to creating user-centric, high-performance digital solutions.</p>
            <h2>My Skills</h2>
            <p>I possess a comprehensive skill set in web development, encompassing:            </p>

            <div className={aboutCSS.skillWrapper}>
                <div className={aboutCSS.skill}>
                    <h3>ReactJS</h3>
                    <div className={aboutCSS.line}></div>
                </div>
                <div className={aboutCSS.skill}>
                    <h3>NextJS</h3>
                    <div className={aboutCSS.line}></div>
                </div>
                <div className={aboutCSS.skill}>
                    <h3>MongoDB</h3>
                    <div className={aboutCSS.line}></div>
                </div>
                <div className={aboutCSS.skill}>
                    <h3>Back-end development</h3>
                    <div className={aboutCSS.line}></div>
                </div>
                <div className={aboutCSS.skill}>
                    <h3>UI/UX</h3>
                    <div className={aboutCSS.line}></div>
                </div>
            </div>
        </div>
        <div className={aboutCSS.AboutImg}>
            <img src={img} alt="My Protrait pic" />
            <div className={aboutCSS.Exp}>
                <h2><span>3+</span>of Experience</h2>
            </div>
        </div>

    </div>
  )
}

export default About