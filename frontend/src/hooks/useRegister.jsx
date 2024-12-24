import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../zustand/store";
import { toast } from "react-toastify";
import { registerUser } from "../services/authService";
import useNotificationStore from "../zustand/notifications";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const { setMessage } = useNotificationStore((state) => state);

  const handleRegister = async (data) => {
    setLoading(true);
    try {
      const response = await registerUser(data);
      const { newUser, token } = response;
      login(newUser, token);
      setMessage("Inscription reussit");
      navigate("/");
    } catch (error) {
      setError(error.response.data.message || "une erreur s'est produite");
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, error, loading };
};

export default useRegister;
