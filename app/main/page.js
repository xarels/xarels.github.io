'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SectionObserver from "../components/SectionObserver";

export default function Home() {
  
  return (
    <div 
    className="main" >
      <SectionObserver />
    
      <Navbar />

      <Contact />
      <Footer />
    </div>
  );
}
