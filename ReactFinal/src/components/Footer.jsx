import React from 'react';
import '../styles/Footer.css';


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white py-3">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <img
            src="/images/Logo.png"  // <-- ruta desde la raíz del servidor
            alt="Logo"
            className="rounded-circle me-2"
            style={{ width: 40, height: 40 }}
          />
          <small>
            © {year} Digital Airlines. Todos los derechos reservados.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
