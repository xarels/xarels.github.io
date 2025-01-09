'use client';
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (

<footer>
    <p>&copy; {new Date().getFullYear()} <span className="highlight">[Your Name]</span>. All rights reserved.</p>
    <div className="social-media">
        <a href="https://www.facebook.com/yourprofile" target="_blank"><FontAwesomeIcon icon= {faFacebookF}/></a>
        <a href="https://www.x.com/yourprofile" target="_blank"><FontAwesomeIcon icon= {faTwitter}/></a>
        <a href="https://www.instagram.com/yourprofile" target="_blank"><FontAwesomeIcon icon= {faInstagram}/></a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank"><FontAwesomeIcon icon= {faLinkedinIn}/></a>
    </div>
</footer>
  )
}
export default Footer;