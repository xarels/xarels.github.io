import React from 'react';
import "./styles/PortfolioItems_module.css"
import imageData from "../data/imageData.json"

const PortfolioItems = () => {
  return (
        <div id="portfolio-items" className="grid">
            {imageData.map ((image) => (
            <div key={image.id} className='portfolio-item'>
            <img src={image.image} alt={image.title} className='image-container' />                
            <h2>{image.title}</h2>   
            <p>{image.description}</p>    
            </div>
            ))}
        </div>
  );
}

export default PortfolioItems