import React from 'react'
import "./styles/AboutMe_module.css";
const AboutMe = () => {
  return (
    <>
    <section id="aboutMe" className="about-section hidden">
        <div className="about-content">

            <div className="about-text">
            <h2>About Me</h2>
            <p>Creative graphic designer with 5+ years of experience in digital and print design.</p>
                <div className="skills">
                <h3>Expertise</h3>
                <ul>
                    <li>Brand Identity Design</li>
                    <li>Digital Illustration</li>
                    <li>Print Design</li>
                    <li>Photo Manipulation</li>
                </ul>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutMe

/*
            <div className="about-image">
             <img src="images/Hero/image.png" alt="[Your picture and Name]" loading="lazy" />
            </div>

*/