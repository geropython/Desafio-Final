import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importamos axios para hacer solicitudes HTTP

const ListaProductosPage = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const [successMessage, setSuccessMessage] = useState(null); // Estado para mostrar éxito

  // Cargar los productos al montar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:8080/api/products'); // Cambiar URL según tu backend
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
        const response = await axios.delete(`http://localhost:8080/api/products/${id}`); // Petición DELETE
        
        // Si la respuesta tiene el código de estado 204, eliminamos el producto de la lista local
        if (response.status === 204) {
          setProductList((prevList) => prevList.filter((product) => product.id !== id));
          setSuccessMessage('Producto eliminado con éxito');
        } else {
          setError('Error al eliminar el producto');
        }
      } catch (err) {
        // Mostrar un error si el producto no fue encontrado (404)
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
                    className="btn btn-danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Eliminar producto
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
