import React from 'react';
import { CardComponent } from '../components/CardComponent';

const AlojamientosPage = () => {
  const alojamientos = [
    {
      title: 'Hotel en Cancún',
      image: 'https://source.unsplash.com/286x180/?Cancun,hotel',  // URL dinámica de Unsplash
      description: 'Hotel 5 estrellas, todo incluido, desde $150 por noche',
      link: '/detalle-alojamiento?destino=Cancun',
    },
    {
      title: 'Apartamento en París',
      image: 'https://source.unsplash.com/286x180/?Paris,apartment',  // URL dinámica de Unsplash
      description: 'Apartamento con vista a la Torre Eiffel, desde $120 por noche',
      link: '/detalle-alojamiento?destino=Paris',
    },
    // más alojamientos con URLs dinámicas
  ];

  return (
    <div>
      <h2 className="mb-4">Alojamientos</h2>
      <div className="row">
        {alojamientos.map((alojamiento, i) => (
          <div className="col-md-4" key={i}>
            <CardComponent {...alojamiento} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlojamientosPage;
