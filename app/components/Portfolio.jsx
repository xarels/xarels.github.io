import React from 'react'
import PortfolioItems from './PortfolioItems';
import "./styles/Portfolio_module.css";

export const MyWork = () => {
  return (
    <>
    <section id="portfolio" class="portfolio-section hidden">
        <h2>My Work</h2>
        <div class="filter-buttons">
            <button data-filter="all" class="active">All</button>
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