// src/pages/VuelosPage.jsx
import React from 'react';
import { CardComponent } from '../components/CardComponent';

const VuelosPage = () => {
  // URLs dinámicas de Unsplash basadas en palabras clave
  const ofertas = [
    {
      title: 'Buenos Aires – Madrid',
      image: 'https://source.unsplash.com/286x180/?airplane,Madrid',  
      description: 'Desde $1,200 USD, directo, ida y vuelta',
      link: '/detalle-vuelo?origen=BA&destino=MAD',
    },
    {
      title: 'Santiago – Nueva York',
      image: 'https://source.unsplash.com/286x180/?airplane,New%20York',  
      description: 'Desde $1,100 USD, escala en Miami',
      link: '/detalle-vuelo?origen=SCL&destino=NYC',
    },
    // más vuelos con sus respectivas URLs
  ];

  return (
    <div>
      <h2 className="mb-4">Ofertas de vuelos</h2>
      <div className="row">
        {ofertas.map((o, i) => (
          <div className="col-md-4" key={i}>
            <CardComponent {...o} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VuelosPage;
