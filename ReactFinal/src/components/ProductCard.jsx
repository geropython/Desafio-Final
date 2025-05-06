import React from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="text-decoration-none text-body"
    >
      <div className="card h-100 shadow-sm">
        {/* Galería de imágenes del producto */}
        <ImageGallery images={product.imagenes} />

        <div className="card-body">
          <h5 className="card-title">{product.nombre}</h5>
          <p className="card-text">{product.descripcion}</p>
          <p className="card-text text-success fw-bold">
            ${product.precio}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
