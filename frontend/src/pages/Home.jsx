import { useAuthStore } from "../zustand/store";

const Home = () => {
  const { user } = useAuthStore();
  return <div>Bonjour {user.username}</div>;
};

export default Home;
