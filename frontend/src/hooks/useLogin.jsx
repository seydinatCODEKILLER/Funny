import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../zustand/store";
import { toast } from "react-toastify";
import { loginUser } from "../services/authService";
import useNotificationStore from "../zustand/notifications";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const { setMessage } = useNotificationStore((state) => state);
  const handleLogin = async (credential) => {
    setLoading(true);
    try {
      const response = await loginUser(credential);
      const { rest, token } = response;
      login(rest, token);
      setMessage("Connexion reussit");
      navigate("/");
    } catch (error) {
      console.log(error);

      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return { handleLogin, loading };
};

export default useLogin;
