import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/Logo.png';
import { FaPlane, FaSuitcase, FaBed } from 'react-icons/fa'; // Importa los iconos
import '../styles/NavBarComponent.css';

export const NavBarComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Obtén el usuario del sessionStorage
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('user'); // Elimina la sesión
    setUser(null); // Actualiza el estado
  };

  const getAvatar = (name) => {
    const initials = name.split(' ').map(word => word[0].toUpperCase()).join('');
    return initials; // Devolvemos las iniciales del nombre
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
      <div className="container-fluid">
        {/* Logo + lema */}
        <NavLink className="d-flex align-items-center text-decoration-none" to="/">
          <img
            src={Logo}
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

        {/* Menú de secciones */}
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

          {/* Si el usuario está autenticado, mostrar nombre y avatar */}
          {user ? (
            <div className="d-flex align-items-center">
              <div className="avatar me-3">
                {getAvatar(user.name)} {/* Avatar con las iniciales del nombre */}
              </div>
              <span>{user.name}</span>
              <button className="btn btn-dark ms-2" onClick={handleLogout}>
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
