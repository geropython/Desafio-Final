import React from 'react';
import Logo from '../imgs/Logo.png';

export const NavBarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
            <div className="container-fluid">
                {/* Bloque izquierdo: logo + lema */}
                <a className="d-flex align-items-center text-decoration-none" href="/">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="rounded-circle me-2"
                        style={{ width: 40, height: 40 }}
                    />
                    <span className="navbar-brand mb-0 h1">Digital Airlines</span>
                    <small className="ms-2 text-muted">“Tu viaje, nuestra pasión”</small>
                </a>

                {/* Botón toggler para pantallas pequeñas */}
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

                {/* Bloque derecho: botones Crear cuenta / Iniciar sesión */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarButtons">
                    <div className="d-flex">
                        <button type="button" className="btn btn-dark me-2">
                            Crear cuenta
                        </button>
                        <button type="button" className="btn btn-outline-success">
                            Iniciar sesión
                        </button>

                    </div>
                </div>
            </div>
        </nav>
    );
};
