import React from 'react';
import "./styles/PortfolioItems_module.css";
import imageData from "../data/imageData.json";
import dynamic from "next/dynamic"
const Lightbox2 = dynamic(() => import("lightbox2"), { ssr: false });
import "lightbox2/dist/css/lightbox.min.css";
import "jquery";

const PortfolioItems = () => {
    React.useEffect(() => {
        if (typeof window !== "undefined") {

        document.addEventListener("contextmenu", (event) => {
            if (event.target.classList.contains("lb-image")) {
                event.preventDefault();
            }
         });

          const lightbox = require("lightbox2");
    
          // Lightbox2 Configuration
          lightbox.option({
            resizeDuration: 200, // Transition speed in ms
            wrapAround: true,    // Enables infinite looping for images
            fadeDuration: 300,   // Fade effect duration
            imageFadeDuration: 300,
            showImageNumberLabel: true, // Show "Image X of Y" label
            disableScrolling: true,     // Prevent scrolling while lightbox is open
          });
        }
      }, []);


  return (
    <div id="portfolio-items" className="grid" onContextMenu={(e) => e.preventDefault()}>
      {imageData.map((image, index) => (
        <div key={index} className='portfolio-item' onContextMenu={(e) => e.preventDefault()}  aria-label={`Open ${image.title} in lightbox`}>
            <a
            key={index}
            href={image.src}
            data-lightbox="gallery" 
            data-title={image.title}
            data-description={image.description}
            onContextMenu={(e) => e.preventDefault()}
            >
            <img src={image.src} alt={image.title} draggable="false" loading='lazy' className='image-container' onContextMenu={(e) => e.preventDefault()} />

            </a>
            <h2>{image.title}</h2>
            <p>{image.description}</p>
        </div>
 
      ))}
    </div>
  );
};

export default PortfolioItems;
