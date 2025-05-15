import React, { useState } from 'react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import CaracteristicasBlock from '../components/CaracteristicasBlock';


const PRODUCTS_PER_PAGE = 10;

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Total de páginas
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  // Obtener los productos de la página actual
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Funciones de navegación
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Bienvenido a Digital Airlines</h2>
        </div>

        <p>Encuentra los mejores vuelos, paquetes y alojamientos.</p>

        <div className="row">
          {currentProducts.map((product) => (
            <div className="col-md-6 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Paginación */}
        <div className="d-flex justify-content-center align-items-center mt-4 gap-2">
          <button
            className="btn btn-outline-primary"
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
          >
            Inicio
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span className="mx-2">Página {currentPage} de {totalPages}</span>
          <button
            className="btn btn-outline-secondary"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      </div>
      <CaracteristicasBlock />

      <Footer />
    </>
  );
};

export default HomePage;
