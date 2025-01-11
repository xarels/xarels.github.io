import React from 'react'
import PortfolioItems from './PortfolioItems';
import "./styles/Portfolio_module.css";

export const MyWork = () => {
  return (
    <>
    <section id="portfolio" className="portfolio-section hidden">
        <h2>My Work</h2>
          <PortfolioItems />
    </section>
    </>
  )
};
export default MyWork