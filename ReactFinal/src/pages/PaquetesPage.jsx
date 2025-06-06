import React from 'react';
import { CardComponent } from '../components/CardComponent';
import productos from '../data/products';

const PaquetesPage = () => {
  // URLs dinámicas de Unsplash basadas en palabras clave
  const paquetes = [
    {
      title: 'Paquete a Cancún',
      image: '/images/cancun1.jpg',
      description: 'Todo incluido, 7 días, desde $799 USD',
      link: '/detalle-paquete?destino=Cancun',
    },
    {
      title: 'Paquete a París',
      image: '/images/paris1.jpg',  
      description: 'Incluye vuelo, hotel y desayuno, desde $1,200 USD',
      link: '/detalle-paquete?destino=Paris',
    },
    // más paquetes con sus respectivas URLs
  ];

  return (
    <div>
      <h2 className="mb-4">Paquetes de Viaje</h2>
      <div className="row">
        {paquetes.map((paquete, i) => (
          <div className="col-md-4" key={i}>
            <CardComponent {...paquete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaquetesPage;
