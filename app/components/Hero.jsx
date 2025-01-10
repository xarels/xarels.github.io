'use client';

import { useState } from "react";
import Preloader from "./Preloader";
import "./styles/Hero_module.css";

export const Hero = () => {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const handlePreloaderComplete = () => {
    setIsLoaded(true);
  };


  return (
        <>
        {!isLoaded && 
        <Preloader onComplete={handlePreloaderComplete} />}
    
    
        { isLoaded && 
        (
          <div className="hero-content">
              <div className="hero-text">
              <h1 className="title">Creative Vision, Exceptional Design</h1>
              <p className="tagline">Hi, I'm <span className="highlight">[Your Name]</span>, transforming ideas into compelling visual experiences</p>
              <div className="cta-buttons">
              <button className="cta-button" onClick={() => document.getElementById('aboutMe').scrollIntoView()}>Get To Know Me</button>
              <button className="cta-button" onClick={() => document.getElementById('portfolio').scrollIntoView()}>View My Work</button>
              <button className="cta-button" onClick={() => document.getElementById('contact').scrollIntoView()}>Let's talk</button>
              </div>
            </div>
          </div>
    )}
    </>
  )
}
export default Hero