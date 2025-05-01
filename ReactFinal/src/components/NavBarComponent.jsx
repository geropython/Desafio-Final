// src/components/NavBarComponent.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../imgs/Logo.png';
import { FaPlane, FaSuitcase, FaBed } from 'react-icons/fa'; // Importa los iconos
import '../styles/NavBarComponent.css';

export const NavBarComponent = () => {
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
            {/* agregá más secciones aquí */}
          </ul>

          <div className="d-flex">
            <button type="button" className="btn btn-dark me-2">
              Crear cuenta
            </button>
            <button type="button" className="btn btn-dark me-2">
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
