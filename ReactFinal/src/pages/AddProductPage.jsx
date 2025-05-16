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
  const [caracteristicas, setCaracteristicas] = useState([]);
  const [selectedCaracteristicas, setSelectedCaracteristicas] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/categories');
        setCategories(response.data);
      } catch (err) {
        console.error('Error al cargar categorías:', err);
        setError('Error al cargar categorías');
      }
    };

    const fetchCaracteristicas = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/caracteristicas');
        setCaracteristicas(response.data);
      } catch (err) {
        console.error('Error al cargar características:', err);
        setError('Error al cargar características');
      }
    };

    fetchCategories();
    fetchCaracteristicas();
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImagesChange = e => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleCaracteristicaToggle = (id) => {
    setSelectedCaracteristicas((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
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
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('categoryId', formData.categoryId);
      formDataToSend.append('caracteristicas', JSON.stringify(selectedCaracteristicas));

      for (let i = 0; i < formData.images.length; i++) {
        formDataToSend.append('images', formData.images[i]);
      }

      await axios.post('http://localhost:8080/api/products', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setError('');
      onAdd && onAdd(formData); // Podés modificar si el backend devuelve el nuevo producto
    } catch (err) {
      console.error('Error al guardar el producto:', err);
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

        {/* Características */}
        <div className="mb-3">
          <label>Características</label>
          <div className="d-flex flex-wrap gap-2">
            {caracteristicas.map((car) => (
              <button
                key={car.id}
                type="button"
                className={`btn btn-outline-primary ${
                  selectedCaracteristicas.includes(car.id) ? 'active' : ''
                }`}
                onClick={() => handleCaracteristicaToggle(car.id)}
              >
                {car.icono} {car.nombre}
              </button>
            ))}
          </div>
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
