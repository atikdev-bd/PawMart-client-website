import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../Hooks/useAuth";

const PrivetRoutes = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();
  if (loading) {
    return <div>Loading....</div>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} replace to="/login"></Navigate>;
};

export default PrivetRoutes;
