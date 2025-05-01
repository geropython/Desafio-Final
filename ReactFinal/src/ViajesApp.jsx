// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBarComponent } from './components/NavBarComponent';
import HomePage from './pages/HomePage';
import VuelosPage from './pages/VuelosPage';
import PaquetesPage from './pages/PaquetesPage';
import AlojamientosPage from './pages/AlojamientosPage';
import ProductDetailPage from './pages/ProductDetailPage';

export const ViajesApp = () => {
  return (
    <div>
      <NavBarComponent />
      <div className="container mt-5 pt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vuelos" element={<VuelosPage />} />
          <Route path="/paquetes" element={<PaquetesPage />} />
          <Route path="/alojamientos" element={<AlojamientosPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};
