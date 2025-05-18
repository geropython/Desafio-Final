import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FiltroProductos from '../components/FiltroProductos'; // Ruta corregida

const ListaProductosPage = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:8080/api/products');
        setProductList(response.data);
      } catch {
        setError('Error al cargar los productos.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="container mt-5">Cargando...</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Lista de Productos</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Botón para registrar nuevo producto */}
      <button
        className="btn btn-success mb-4"
        onClick={() => navigate('/administracion/registrar-producto')}
      >
        ➕ Registrar nuevo producto
      </button>

      {/* Filtro y listado */}
      <FiltroProductos productos={productList} />
    </div>
  );
};

export default ListaProductosPage;
