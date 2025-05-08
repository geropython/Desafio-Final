import React from 'react';
import './Footer.css';
import logo from '../images/Logo.png'; 

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white py-3">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <img src={logo} alt="Logo" className="footer-logo me-2" />
          <small>
            © {year} Digital Airlines. Todos los derechos reservados.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
