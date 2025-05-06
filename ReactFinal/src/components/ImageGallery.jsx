import React from 'react';
import './ImageGallery.css'; // Crea este archivo para estilos personalizados

const ImageGallery = ({ images = [] }) => {
  const mainImage = images[0];
  const otherImages = images.slice(1, 5);

  return (
    <div className="gallery-container">
      <div className="main-image">
        <img src={mainImage} alt="Principal" />
      </div>
      <div className="image-grid">
        {otherImages.map((img, idx) => (
          <div key={idx} className="grid-item">
            <img src={img} alt={`Vista ${idx + 2}`} />
          </div>
        ))}
        <div className="grid-item see-more">
          <span>Ver más</span>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
