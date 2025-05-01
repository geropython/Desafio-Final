// src/pages/ProductDetailPage.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import products from '../data/products.json';

const ProductDetailPage = () => {
  const navigate = useNavigate();  // Cambié useHistory por useNavigate
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div>
      {/* 1 HEADER full-width */}
      <header
        className="w-100 d-flex align-items-center px-4"
        style={{
          height: '200px',
          backgroundImage: `url(${product.imagenPrincipal})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* 2 Título alineado a la izquierda */}
        <h1 className="m-0 text-white flex-grow-1">
          {product.nombre}
        </h1>

        {/* 3 Flecha “volver atrás” alineada a la derecha */}
        <button
          onClick={() => navigate(-1)}  // Cambié history.goBack() por navigate(-1)
          className="btn btn-link text-white p-0"
          style={{ fontSize: '1.5rem' }}
          aria-label="Volver atrás"
        >
          ←
        </button>
      </header>

      {/* 4 BODY con descripción e imágenes */}
      <main className="container my-4">
        <div className="row">
          {/* Galería de imágenes */}
          <div className="col-md-6 mb-3">
            {product.imagenes.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${product.nombre} foto ${i+1}`}
                className="img-fluid rounded mb-2"
              />
            ))}
          </div>

          {/* Texto descriptivo */}
          <div className="col-md-6">
            <h2>Descripción</h2>
            <p>{product.descripcion}</p>
            <p className="fw-bold text-success">
              Precio: ${product.precio}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;
