'use client';
import React from "react";
import Preloader from "./Preloader";
import "./styles/Hero_module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Handle when the preloader finishes
  const handlePreloaderComplete = () => {
    setIsLoaded(true);
  };

  // Add a small delay to mimic asset loading or smooth transitions
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      handlePreloaderComplete();
    }, 2000); // Adjust delay as needed
    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  return (
<div className="hero">
      {!isLoaded && <Preloader onComplete={handlePreloaderComplete} />}
      {isLoaded && (
        <>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="title">Creative Vision, Exceptional Design</h1>
            <p className="tagline">
              Hi, I'm <span className="highlight">[Your Name]</span>, transforming ideas into compelling visual experiences.
            </p>
            <div className="cta-buttons">
              <button
                className="cta-button"
                onClick={() => document.getElementById("aboutMe").scrollIntoView()}
              >
                Get To Know Me
              </button>
              <button
                className="cta-button"
                onClick={() => document.getElementById("portfolio").scrollIntoView()}
              >
                View My Work
              </button>
              <button
                className="cta-button"
                onClick={() => document.getElementById("contact").scrollIntoView()}
              >
                Let's talk
              </button>
            </div>
          </div>
        </div>
      <div className="hero-visual">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <img src="hero.png" alt="Creative Workspace" className="hero-img" />
       </div>
       <div className="scroll-indicator">
              <span className="scroll-text">Scroll Down</span>
             <FontAwesomeIcon icon= {faChevronDown}/>
        </div>
        </>
      )}
  </div>
  );
};

export default Hero;
