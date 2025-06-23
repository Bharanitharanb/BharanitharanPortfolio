import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <div className="contact-icons">
        <a href="https://github.com/Bharanitharanb" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>

        <a href="https://www.linkedin.com/in/bharanitharan-b-25a65a256" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>

        <a href="mailto:bebharani01@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" />
        </a>
        
         <a 
         href="/Bharanitharan Resume.pdf" 
         target="_blank" 
         rel="noopener noreferrer"
         className="download-button"
         >
         Download Resume
         </a>

      </div>
    </section>
  )
}

export default Contact;
