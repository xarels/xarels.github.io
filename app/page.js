'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Preloader from "./components/Preloader";


export default function Hero() {

  const [isLoaded, setIsLoaded] = useState(false);
  const handlePreloaderComplete = () => {
    setIsLoaded(true);
  };

  const router = useRouter();
  const handleCTAClick = () => {
    router.push("/main");
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
          <button className="cta-button" onClick={handleCTAClick}>Get To Know Me</button>
          <button className="cta-button" onClick={handleCTAClick}>View My Work</button>
          <button className="cta-button" onClick={handleCTAClick}>Let's talk</button>
          </div>
        </div>
      </div>
    </div>
)}

    </>

  );
}
