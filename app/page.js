'use client';

import { delay, motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import "./components/styles/Hero_module.css";
import Preloader from "./components/Preloader";


export default function Hero() {

  const [isLoaded, setIsLoaded] = useState(false);
  const handlePreloaderComplete = () => {
    setIsLoaded(true);
  }

  const router = useRouter();
  const handleCTAClick = () => {
    router.push("/main");
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChikdren: 0.3,
        delayChildren: 0.5
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      }, 
    },
  };

  const buttonVariants = {  
    hover: {
      scale: 1.1,
      boxShadow: "0px 4px 10px rgb(0,112,143,0.5)",
      transition: {
        duration: 0.3,
      },
    }
  };

  const floatingEffect = {
    hidden: { y: 0 },
    visible: {
      y: [0,10,0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
    {!isLoaded && <Preloader onComplete={handlePreloaderComplete} />}


    { isLoaded && (<div
    className="hero"   
    >
      <div className="hero-content">
          <div className="hero-text">
          <h1 className="title">Creative Vision, Exceptional Design</h1>
          <p className="tagline">Hi, I'm <span className="highlight">[Your Name]</span>, transforming ideas into compelling visual experiences</p>
          <button className="cta" onClick={handleCTAClick}>View Portfolio</button>
        </div>
      </div>

  </div>)}

    </>

  );
}
