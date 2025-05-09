import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import axios from 'axios';

const ListaProductosPage = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate(); // Inicializamos navigate

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:8080/api/products');
        setProductList(response.data);
      } catch (err) {
        setError('Error al cargar los productos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      try {
        setLoading(true);
        const response = await axios.delete(`http://localhost:8080/api/products/${id}`);
        if (response.status === 204) {
          setProductList((prevList) => prevList.filter((product) => product.id !== id));
          setSuccessMessage('Producto eliminado con éxito');
        } else {
          setError('Error al eliminar el producto');
        }
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError('Producto no encontrado');
        } else {
          setError('Error al eliminar el producto');
        }
      } finally {
        setLoading(false);
      }
    } else {
      alert('Eliminación cancelada');
    }
  };

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="container mt-5">
      <h2>Lista de Productos</h2>

      {error && <div className="alert alert-danger">{error}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      {/* Botón para registrar un nuevo producto */}
      <button
        className="btn btn-success mb-3"
        onClick={() => navigate('/administracion/registrar-producto')}
      >
        ➕ Registrar nuevo producto
      </button>

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productList.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No hay productos disponibles</td>
            </tr>
          ) : (
            productList.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nombre}</td>
                <td>{product.descripcion}</td>
                <td>${product.precio}</td>
                <td>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => navigate(`/administracion/editar-producto/${product.id}`)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListaProductosPage;
