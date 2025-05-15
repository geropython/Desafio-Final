import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // 👈 Inicializamos navigate

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (isMobile) {
    return (
      <div className="container text-center mt-5">
        <h2>Panel de Administración</h2>
        <p className="text-danger">El panel no está disponible en dispositivos móviles.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Panel de Administración</h2>
      <ul className="list-group mt-4">
        <li className="list-group-item">🔧 Gestión de productos</li>
        <li className="list-group-item">📦 Ver pedidos</li>
        <li className="list-group-item">👥 Administración de usuarios</li>
        <li className="list-group-item">📊 Reportes y métricas</li>
        <li className="list-group-item" onClick={() => navigate('/administracion/caracteristicas')} style={{ cursor: 'pointer' }}>
          🏷️ Administrar características
        </li>
      </ul>

      {/* ✅ Botón para lista de productos */}
      <button
        className="btn btn-primary mt-4"
        onClick={() => navigate('/administracion/lista-productos')}
      >
        📋 Lista de productos
      </button>
    </div>
  );
};

export default AdminPanel;
