import React from 'react';
import "./styles/PortfolioItems_module.css"
import imageData from "../data/imageData.json";
import GLightbox from "@glightbox";
import "@glightbox/dist/css/glightbox.min.css"



function ImageCard ({ image, onClick}) {

/*
        <h2>{image.title}</h2>   
        <p>{image.description}</p>    
*/

    return (
        <div className='portfolio-item' onClick={onClick}> 
        <img src={image.src} alt={image.title} draggable="false" loading='lazy' className='image-container' />             
        </div>
    );    
}

const PortfolioItems = () => {
React.useEffect (() => {
    const lightbox = GLightbox({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
        zoomable: false,
    });
    return () => lightbox.destroy;
}, []);

  return (
        <div id="portfolio-items" className="grid">
            {imageData.map ((image, index) => (
                <a
                key={index}
                href={image.src}
                className="glightbox"
                data-gallery="gallery"
                data-title={image.title}
                data-description={image.description}
                >
                <ImageCard 
                key={image.id}
                image={image}
                />
                </a>
            ))}
        </div>
  );
}
export default PortfolioItems