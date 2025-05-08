import React from 'react';
import './ImageGallery.css'; // Asegúrate de tener estilos personalizados en este archivo

const ImageGallery = ({ images = [] }) => {
  // Nos aseguramos de que haya al menos 5 imágenes
  if (images.length < 5) {
    return <p>No hay suficientes imágenes para mostrar.</p>;
  }

  // Definimos la imagen principal (la primera) y las otras 4
  const mainImage = images[0];
  const otherImages = images.slice(1, 5); // Obtenemos las siguientes 4 imágenes

  return (
    <div className="gallery-container">
      {/* Imagen principal */}
      <div className="main-image">
        <img src={mainImage} alt="Imagen principal" />
      </div>
      
      {/* Grid de las otras imágenes */}
      <div className="image-grid">
        {otherImages.map((img, idx) => (
          <div key={idx} className="grid-item">
            <img src={img} alt={`Vista ${idx + 2}`} />
          </div>
        ))}
        
        {/* Botón de 'Ver más' */}
        <div className="grid-item see-more">
          <span>Ver más</span>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
