'use client';
import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Main from './Main';
import Footer from "./Footer";

export const Home = () => {

  const [scrolled, setScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Avoid hydration mismatch by delaying the effect until after the component mounts
    setHasMounted(true);

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure rendering only after mounting
  if (!hasMounted) {
    return null; // Render nothing until the client is ready
  }

  return (
    <div className={scrolled ? 'scrolled' : 'notScrolled'}>
      <header >
        <Hero />
      </header>
      <Main />
    <footer>
      <Footer />
    </footer>
    </div>
  );
};
export default Home;