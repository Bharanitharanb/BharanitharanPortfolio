import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="tooltip">
            <FaUserCircle className="profile-icon" />
          <span className="name"> Bharanitharan </span>
          <div className="tooltip-image">
            <img src="/Myimage.jpg" alt="profile" />
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar;
