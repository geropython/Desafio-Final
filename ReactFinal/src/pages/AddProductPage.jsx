import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProductPage = ({ existingProducts, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    images: [],
    categoryId: ''
  });
  const [error, setError] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/categories');
        setCategories(response.data);
      } catch (err) {
        setError('Error al cargar categorías');
      }
    };
    fetchCategories();
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImagesChange = e => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (existingProducts.some(p => p.name === formData.name)) {
      setError('El nombre ya está en uso.');
      return;
    }

    if (!formData.categoryId) {
      setError('Por favor, seleccione una categoría.');
      return;
    }

    try {
      // Aquí puedes adaptar según si usas onAdd local o llamada real a tu API
      await axios.post('http://localhost:8080/api/products', formData);
      setError('');
      onAdd && onAdd(formData); // Solo si se pasa onAdd
    } catch (err) {
      setError('Error al guardar el producto');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre</label>
          <input
            name="name"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Descripción</label>
          <textarea
            name="description"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Imágenes</label>
          <input
            type="file"
            name="images"
            className="form-control"
            multiple
            onChange={handleImagesChange}
          />
        </div>
        <div className="mb-3">
          <label>Categoría</label>
          <select
            name="categoryId"
            className="form-select"
            value={formData.categoryId}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una categoría</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.nombre}
              </option>
            ))}
          </select>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-success">
          Guardar producto
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
