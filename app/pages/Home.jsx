'use client';
import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Main from './Main';
import Footer from "../components/Footer";
import SectionObserver from "../components/SectionObserver";

export const Home = () => {
  
  return (
    <>
      <header >
        <Hero />
      </header>
      <main>    
      <Main />
      </main>
    <footer>
      <Footer />
    </footer>
    </>
  );
};
export default Home;