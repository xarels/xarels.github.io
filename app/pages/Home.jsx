'use client';
import Hero from './Hero';
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import MyExperience from "./MyExperience";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Main_module.css";


export const Home = () => {


  return (
    <>
      <header >
        <Hero />
      </header>
      <Navbar />
      <main>    
        <section id="aboutMe" className='about-section'>
          <AboutMe />
        </section>
        <section id="portfolio" className='portfolio-section'>
          <Portfolio />
        </section>
        <section id="myExperience" className='myExperience'>
          <MyExperience />
        </section>
        <section id="contact" className='contact-section'>
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Home;