import React from 'react'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav clasname= "navbar">
      <a href="" className='logo'>
        <Image src="http://localhost:3000/logo.png" alt="Logo" width={100} height={100} />
      </a>
      <ul>
      <li><a href="" >Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#my-work">My Work</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  )
}
export default Navbar