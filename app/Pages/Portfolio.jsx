'use client';
import React, { useEffect, useState } from 'react';
import PortfolioItems from '../components/PortfolioItems';
import "../components/styles/Portfolio_module.css";

export const MyWork = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate initial visibility for hydration-safe rendering
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust delay as needed for animations
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="portfolio"
      className={`portfolio-section ${isVisible ? 'visible' : 'hidden'}`}
    >
      <h2>My Work</h2>
      <PortfolioItems />
    </section>
  );
};

export default MyWork;