import React from 'react';
import './GalleryPreview.scss';

const images = ['/gallery1.jpg', '/gallery2.jpg', '/gallery3.jpg', '/gallery4.jpg'];

const GalleryPreview = () => {
  return (
    <section className="gallery-preview section">
      <h2>Vibes from Our Venues</h2>
      <div className="gallery-preview__grid">
        {images.map((src, idx) => (
          <img src={src} alt={`Gallery ${idx + 1}`} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default GalleryPreview;
