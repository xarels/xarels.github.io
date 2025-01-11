import React from 'react'
import "./styles/Navbar_module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }


  return (
<>
    <nav>
      <div className='navbar-container'>
      <div className='logo'><img src="/logo.png" alt="Creative Workspace" className='logo-img'/></div>
      <button className="hamburger-menu" onClick={toggleMenu} aria-label='Toggle navigation menu'>
      ...</button>
      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
      <li><a href="/" >Home</a></li>
        <li><a href="#aboutMe">About Me</a></li>
        <li><a href="#portfolio">My Work</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
      </div>
    </nav>
  </>
  )
}
export default Navbar