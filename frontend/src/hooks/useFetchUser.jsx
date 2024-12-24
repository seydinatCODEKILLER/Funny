import { fetchUser } from "../services/userService";
import { useAuthStore } from "../zustand/store";

const useFetchUser = () => {
  const { login, setLoading } = useAuthStore();

  const handleFetchUser = async (token) => {
    setLoading(true);

    setLoading(true);
    try {
      const userData = await fetchUser(token);
      login(userData, token);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données utilisateur :",
        error
      );
    } finally {
      setLoading(false);
    }
  };
  return { handleFetchUser };
};

export default useFetchUser;
