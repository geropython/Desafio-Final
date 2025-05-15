import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaPlane, FaSuitcase, FaBed } from 'react-icons/fa';
import '../styles/NavBarComponent.css';

export const NavBarComponent = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
    navigate('/'); // Redirige al inicio como usuario anónimo
  };

  const getAvatar = (name) => {
    const initials = name.split(' ').map(word => word[0].toUpperCase()).join('');
    return initials;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
      <div className="container-fluid">
        <NavLink className="d-flex align-items-center text-decoration-none" to="/">
          <img
            src="/images/Logo.png"  // <-- ruta desde la raíz del servidor
            alt="Logo"
            className="rounded-circle me-2"
            style={{ width: 40, height: 40 }}
          />

          <span className="navbar-brand mb-0 h1">Digital Airlines</span>
          <small className="ms-2 text-muted">“Tu viaje, nuestra pasión”</small>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarButtons"
          aria-controls="navbarButtons"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarButtons">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/vuelos">
                <FaPlane className="me-2" /> Vuelos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/paquetes">
                <FaSuitcase className="me-2" /> Paquetes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/alojamientos">
                <FaBed className="me-2" /> Alojamientos
              </NavLink>
            </li>
          </ul>

          {/* Sección para usuario autenticado o anónimo */}
          {user ? (
            <div className="d-flex flex-column align-items-center ms-3">
              <div className="avatar mb-1">{getAvatar(user.name)}</div>
              <span className="mb-2">{user.name}</span>
              <button className="btn btn-outline-dark btn-sm" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </div>
          ) : (
            <div className="d-flex">
              <NavLink to="/registrar" className="btn btn-dark me-2">
                Crear cuenta
              </NavLink>
              <NavLink to="/iniciar-sesion" className="btn btn-dark me-2">
                Iniciar sesión
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
