import React from 'react'
import PortfolioItems from './PortfolioItems';
import "./styles/Portfolio_module.css";

export const MyWork = () => {
  return (
    <>
    <section id="portfolio" className="portfolio-section hidden">
        <h2>My Work</h2>
        <div className="filter-buttons">
            <button data-filter="all" className="active">All</button>
            <button data-filter="branding">Branding</button>
            <button data-filter="portrait">Portrait</button>
            <button data-filter="poster">Poster</button>
        </div>
          <PortfolioItems />
    </section>
    </>
  )
};
export default MyWork