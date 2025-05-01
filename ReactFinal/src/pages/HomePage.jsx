import React, { useState } from 'react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

const getRandomProducts = (list, count = 10) => {
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const HomePage = () => {
  // Cargamos inicialmente 10 productos aleatorios una sola vez
  const [randomProducts, setRandomProducts] = useState(
    () => getRandomProducts(products, 10)
  );

  // Función para refrescar la lista de productos
  const refreshProducts = () => {
    setRandomProducts(getRandomProducts(products, 10));
  };

  return (
    <div className="container mt-4">
      {/* Encabezado con botón de refrescar */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Bienvenido a Digital Airlines</h2>
        <button
          className="btn btn-outline-success"
          onClick={refreshProducts}
        >
          Refrescar
        </button>
      </div>

      <p>Encuentra los mejores vuelos, paquetes y alojamientos.</p>

      <div className="row">
        {randomProducts.map((product) => (
          <div className="col-md-6 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
