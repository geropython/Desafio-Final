import React, { useEffect, useState } from 'react';
import { searchImages } from '../api/pexels';

const DemoGaleria = () => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await searchImages('paris');
      
      // Asegúrate de acceder correctamente a las URLs de las imágenes (por ejemplo, usando 'src.original' si es la estructura de la respuesta)
      const fotos = response.map((foto) => foto.src.original); // Extrae la URL de la imagen
      setImagenes(fotos);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>Imágenes de París</h3>
      <div className="d-flex flex-wrap gap-2">
        {imagenes.map((url, idx) => (
          <img key={idx} src={url} alt={`imagen-${idx}`} width="200" />
        ))}
      </div>
    </div>
  );
};

export default DemoGaleria;
