import React, { useState } from 'react';
import '../styles/ImageGallery.css';

const ImageGallery = ({ images = [] }) => {
  const [showAll, setShowAll] = useState(false);

  if (images.length === 0) {
    return <p>No hay imágenes para mostrar.</p>;
  }

  const mainImage = images[0];
  // Si no muestra todo, muestra solo 4 imágenes secundarias
  const sideImages = showAll ? images.slice(1) : images.slice(1, 5);

  return (
    <div className="gallery-container">
      <div className="main-image">
        <img src={mainImage} alt="Principal" loading="lazy" />
      </div>

      <div className="image-grid">
        {sideImages.map((img, idx) => (
          <div key={idx} className="grid-item">
            <img src={img} alt={`Imagen ${idx + 2}`} loading="lazy" />
          </div>
        ))}

        {!showAll && images.length > 5 && (
          <div className="grid-item see-more" onClick={() => setShowAll(true)}>
            <span>Ver más</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
