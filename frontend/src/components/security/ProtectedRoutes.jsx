/* eslint-disable react/prop-types */
import { useAuthStore } from "../../zustand/store";
import { Navigate } from "react-router-dom";
import { useEffect, useCallback } from "react";
import useFetchUser from "../../hooks/useFetchUser";
import LoaderPage from "../loader/LoaderPage";

const ProtectedRoutes = ({ children }) => {
  const { token, loading, setLoading, user, logout, isTokenValid } =
    useAuthStore();
  const { handleFetchUser } = useFetchUser();

  const fetchUser = useCallback(async () => {
    if (!token || !isTokenValid()) {
      logout();
      return;
    }
    setLoading(true);
    try {
      await handleFetchUser(token);
    } finally {
      setLoading(false);
    }
  }, [token, isTokenValid, handleFetchUser, setLoading, logout]);

  useEffect(() => {
    if (token && !user) {
      fetchUser();
    } else if (!token) {
      setLoading(false);
    }
  }, [token, user, fetchUser, setLoading]);

  if (loading) {
    return <LoaderPage />;
  }

  return token && isTokenValid() ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
