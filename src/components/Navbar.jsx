import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="tooltip">
          <FaUserCircle className="profile-icon" />
          <span className="name">Bharanitharan B</span>
          <div className="tooltip-image">
            <img src="/Myimage.jpg" alt="profile" />
          </div>
        </div>
      </div>

      <div className="menu-icon" onClick={toggleNavbar}>
        ☰
      </div>

      <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
