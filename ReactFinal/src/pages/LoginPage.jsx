import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirigir después del login

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para controlar si el usuario está autenticado
  const navigate = useNavigate();

  const users = [
    { email: 'gonzaliag@gmail.com', password: 'Gerocodbo2', name: 'Geronimo Gonzalia', isAdmin: false },
    { email: 'admin@gmail.com', password: 'admin123', name: 'Administrador', isAdmin: true },
  ]; // Datos de ejemplo, reemplazar con datos reales o API

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      sessionStorage.setItem('user', JSON.stringify(user)); // Guardamos la sesión
      navigate('/perfil'); // Redirige a la página de perfil o página principal
    } else {
      setError('Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <button type="submit" className="btn btn-dark">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
