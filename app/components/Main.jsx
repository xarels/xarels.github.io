'use client';

import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import SectionObserver from "./SectionObserver";

export const Main = () => {
  
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
export default Main