// src/components/CaracteristicasBlock.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CaracteristicasBlock = () => {
  const [caracteristicas, setCaracteristicas] = useState([]);

  useEffect(() => {
    const fetchCaracteristicas = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/caracteristicas');
        setCaracteristicas(response.data);
      } catch (err) {
        console.error('Error al cargar características', err);
      }
    };

    fetchCaracteristicas();
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Características</h3>
      <div className="row">
        {caracteristicas.map((car) => (
          <div
            key={car.id}
            className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
          >
            <div className="border rounded p-3 h-100 d-flex flex-column justify-content-center align-items-center shadow-sm bg-light">
              <span style={{ fontSize: '1.8rem' }}>{car.icono}</span>
              <small className="mt-2">{car.nombre}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaracteristicasBlock;
