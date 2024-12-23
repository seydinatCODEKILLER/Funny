/* eslint-disable react/prop-types */
import { useAuthStore } from "../../zustand/store";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { token } = useAuthStore();
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoutes;
