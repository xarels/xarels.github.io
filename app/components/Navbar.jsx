import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './styles/Navbar_module.css';

export const Navbar = () => {
  return (
    <nav clasname= "navbar">
      <a href="#" className='logo'>
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      </a>
      <ul>
      <li><a href="#" >Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#my-work">My Work</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
      <div>
        <a href="#contact"> contact </a>
      </div>

    </nav>
  )
}
export default Navbar