'use client';
import React from 'react';
import Hero from './Hero';
import Main from './Main';
import Footer from "./Footer";


export default function Home() {

  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  }
, []);

  return (
    <>
    <div className={scrolled ? 'scrolled' : 'notScrolled'}>
      <header className='hero'>
        <Hero />
      </header>
      <Main />
      <Footer />
      </div>
    </>
  );
}