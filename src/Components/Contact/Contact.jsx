import React from 'react';
import contactCSS from "./../Contact/Contact.module.css"

function Contact() {
  return (
    <div className={`${contactCSS.ContactWrapper} section`} id="Contact">
        <h2>Contact Us</h2>
        <p className={contactCSS.pera}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nisi voluptatum ab saepe incidunt tenetur ea officiis a distinctio sapiente.</p>
        
        <div className={contactCSS.ContactContainer}>
            <div className={contactCSS.ContactInfo}>
                <div className={contactCSS.card}>
                    <i className="ri-phone-line"></i>
                    <h3>+91 79704 05391</h3>
                </div>
                <div className={contactCSS.card}>
                    <i className="ri-mail-line"></i>
                    <h3>vaidikjsk@gmail.com</h3>
                </div>
                <div className={contactCSS.card}>
                     <i class="ri-map-pin-line"></i>
                    <h3>KIIT University, Bhubaneshwar, India</h3>
                </div>
            </div>
            <div className={contactCSS.Contactform}>
                <h3>Get In Touch</h3>
                <div className={contactCSS.inputWrapper}>
                    <input type="text" placeholder="Name *" />
                </div>
                <div className={contactCSS.inputWrapper}>
                    <input type="email" placeholder="Email *" />
                </div>
                <textarea placeholder="Message"></textarea>
                <button>Submit
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Contact