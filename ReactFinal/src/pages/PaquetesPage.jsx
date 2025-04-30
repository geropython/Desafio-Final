import React from 'react';
import { CardComponent } from '../components/CardComponent';

const PaquetesPage = () => {
  // URLs dinámicas de Unsplash basadas en palabras clave
  const paquetes = [
    {
      title: 'Paquete a Cancún',
      image: 'https://source.unsplash.com/286x180/?Cancun,travel',  
      description: 'Todo incluido, 7 días, desde $799 USD',
      link: '/detalle-paquete?destino=Cancun',
    },
    {
      title: 'Paquete a París',
      image: 'https://source.unsplash.com/286x180/?Paris,travel',  
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
