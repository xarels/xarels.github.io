import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import "./styles/PortfolioItems_module.css";
import imageData from "../data/imageData.json";
import "lightbox2/dist/css/lightbox.min.css";

// Dynamically import Lightbox2 for client-side only
const Lightbox2 = dynamic(() => import("lightbox2"), { ssr: false });

const PortfolioItems = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Prevent right-click on lightbox images
      const contextMenuListener = (event) => {
        if (event.target.classList.contains("lb-image")) {
          event.preventDefault();
        }
      };
      document.addEventListener("contextmenu", contextMenuListener);

      // Configure Lightbox2 options dynamically
      import("lightbox2").then((Lightbox) => {
        Lightbox.option({
          resizeDuration: 200,
          wrapAround: true,
          fadeDuration: 300,
          imageFadeDuration: 300,
          showImageNumberLabel: true,
          disableScrolling: true,
        });
      });

      // Cleanup event listener on unmount
      return () => {
        document.removeEventListener("contextmenu", contextMenuListener);
      };
    }
  }, []);

  return (
    <div id="portfolio-items" className="grid">
      {imageData.map((image, index) => (
        <PortfolioItem key={index} image={image} />
      ))}
    </div>
  );
};

// A separate component for each portfolio item
const PortfolioItem = ({ image }) => {
  const { src, title, description } = image;

  return (
    <div
      className="portfolio-item"
      onContextMenu={(e) => e.preventDefault()}
      aria-label={`Open ${title} in lightbox`}
    >
      <a
        href={src}
        data-lightbox="gallery"
        data-title={title}
        data-description={description}
        onContextMenu={(e) => e.preventDefault()}
      >
        <img
          src={src}
          alt={title}
          draggable="false"
          loading="lazy"
          className="image-container"
          onContextMenu={(e) => e.preventDefault()}
        />
      </a>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

// PropTypes for PortfolioItem to ensure data integrity
PortfolioItem.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default PortfolioItems;