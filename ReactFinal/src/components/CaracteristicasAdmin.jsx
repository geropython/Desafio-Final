import React, { useState, useEffect } from 'react';

const CaracteristicasAdmin = () => {
  const [caracteristicas, setCaracteristicas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [icono, setIcono] = useState('');
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    // Aquí puedes cargar las características desde una API
    const mock = [
      { id: 1, nombre: 'WiFi', icono: '📶' },
      { id: 2, nombre: 'Aire acondicionado', icono: '❄️' }
    ];
    setCaracteristicas(mock);
  }, []);

  const handleGuardar = () => {
    if (!nombre || !icono) return;
    if (editando) {
      setCaracteristicas(prev =>
        prev.map(c => c.id === editando ? { ...c, nombre, icono } : c)
      );
    } else {
      setCaracteristicas(prev => [
        ...prev,
        { id: Date.now(), nombre, icono }
      ]);
    }
    setNombre('');
    setIcono('');
    setEditando(null);
  };

  const handleEditar = (car) => {
    setEditando(car.id);
    setNombre(car.nombre);
    setIcono(car.icono);
  };

  const handleEliminar = (id) => {
    setCaracteristicas(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div className="container mt-5">
      <h3>Administrar características</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Ícono (emoji o nombre)"
          value={icono}
          onChange={(e) => setIcono(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleGuardar}>
          {editando ? 'Actualizar' : 'Añadir nueva'}
        </button>
      </div>
      <ul className="list-group">
        {caracteristicas.map(car => (
          <li key={car.id} className="list-group-item d-flex justify-content-between">
            <span>{car.icono} {car.nombre}</span>
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => handleEditar(car)}>Editar</button>
              <button className="btn btn-sm btn-danger" onClick={() => handleEliminar(car.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaracteristicasAdmin;
