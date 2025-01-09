'use client';

import { useState } from "react";
import Preloader from "./Preloader";
import "./styles/Hero_module.css";

export const Hero = ({onEnter}) => {
  
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
        <div className="hero">
          <div className="hero-content">
              <div className="hero-text">
              <h1 className="title">Creative Vision, Exceptional Design</h1>
              <p className="tagline">Hi, I'm <span className="highlight">[Your Name]</span>, transforming ideas into compelling visual experiences</p>
              <div className="cta-buttons">
              <button className="cta-button" onClick={onEnter}>Get To Know Me</button>
              <button className="cta-button" onClick={onEnter}>View My Work</button>
              <button className="cta-button" onClick={onEnter}>Let's talk</button>
              </div>
            </div>
          </div>
        </div>
    )}
    </>
  )
}
export default Hero