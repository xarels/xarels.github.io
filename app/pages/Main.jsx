import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import MyExperience from "./MyExperience";
import SectionObserver from "../components/SectionObserver";
import "../components/styles/Main_module.css";

export const Main = () => {
  
  return (
    <>    
    <SectionObserver />
      <Navbar />
      <AboutMe />
      <Portfolio />
      <MyExperience />
      <Contact />
    </>
  );
};

export default Main;