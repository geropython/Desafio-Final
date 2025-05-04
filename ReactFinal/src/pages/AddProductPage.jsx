import React, { useState } from 'react';

const AddProductPage = ({ existingProducts, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    images: []
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImagesChange = e => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validación de nombre único
    if (existingProducts.some(p => p.name === formData.name)) {
      setError('El nombre ya está en uso.');
      return;
    }

    // Guardar producto (simulado o con backend)
    onAdd(formData);
    setError('');
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
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-success">
          Guardar producto
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
