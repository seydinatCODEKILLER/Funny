/* eslint-disable react/prop-types */
import { Spinner } from "flowbite-react";
import { useAuthStore } from "../../zustand/store";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import useFetchUser from "../../hooks/useFetchUser";

const ProtectedRoutes = ({ children }) => {
  const { token, loading } = useAuthStore();
  const { handleFetchUser } = useFetchUser();
  useEffect(() => {
    if (token) {
      handleFetchUser(token);
    }
  }, [token]);
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-4 min-h-screen">
          <Spinner size="md" aria-label="Chargement en cours..." />
          <p className="text-sm font-medium">Recuperation des donnees</p>
        </div>
      </div>
    );
  }

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
