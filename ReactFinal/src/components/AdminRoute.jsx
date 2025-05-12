// This component checks if the user is an admin before allowing access to certain routes.
import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  return user?.isAdmin ? children : <Navigate to="/" />;
};

export default AdminRoute;
