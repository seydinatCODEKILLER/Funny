import { fetchUser } from "../services/userService";
import { useAuthStore } from "../zustand/store";
import { useCallback } from "react";

const useFetchUser = () => {
  const { login } = useAuthStore();

  const handleFetchUser = useCallback(
    async (token) => {
      try {
        const userData = await fetchUser(token);
        login(userData, token);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données utilisateur :",
          error
        );
      }
    },
    [login]
  );

  return { handleFetchUser };
};

export default useFetchUser;
