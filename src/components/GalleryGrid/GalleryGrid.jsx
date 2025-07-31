import React from 'react';
import './GalleryGrid.scss';

const GalleryGrid = ({ images }) => {
  return (
    <div className="gallery-grid container">
      <h2 className="signature-font">The Vibes</h2>
      <div className="gallery-grid__wrapper">
        {images.map((src, idx) => (
          <div className="gallery-grid__item" key={idx}>
            <img src={src} alt={`Gallery ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
