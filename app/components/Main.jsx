'use client';

import Navbar from "./Navbar";
import Contact from "./Contact";
import SectionObserver from "./SectionObserver";
import  "./styles/Main_module.css";

export const Main = () => {
  
  return (
    <main className="main-content hidden">    
    <SectionObserver />
      <Navbar />
      

      <Contact />
    </main>
  );
}
export default Main