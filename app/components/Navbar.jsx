'use client';
import React, { useState, useEffect } from 'react';
import "./styles/Navbar_module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize to prevent inconsistent behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Automatically close the menu on larger screens
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <img src="/logo.png" alt="Creative Workspace" className="logo-img" />
        </div>
        {/* Hamburger Menu Button */}
        <button
          className={`hamburger-menu ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {/* Animated Hamburger */}
          <span className="line top-line"></span>
          <span className="line middle-line"></span>
          <span className="line bottom-line"></span>
        </button>
        {/* Navigation Links */}
        <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
          <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#aboutMe" onClick={() => setMenuOpen(false)}>About Me</a></li>
          <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>My Work</a></li>
          <li><a href="#myExperience" onClick={() => setMenuOpen(false)}>My Experience</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Me</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;