import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useMultiplayerGame } from "../../../hooks/useMultiplayerGame";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "../../../services/userService";
import { RiShare2Fill } from "react-icons/ri";
import CreateGameForm from "../../../components/game/quizz/multiJoueur/CreateGameForm";
import CodeGame from "../../../components/game/quizz/multiJoueur/CodeGame";
import InviteUsersModal from "../../../components/game/quizz/multiJoueur/InviteUsersModal";

const CreateGame = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userData = await fetchAllUsers();
        setUsers(userData.users);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };
    getUsers();
  }, []);
  const { gameCode, error, handleCreateGame, loading } = useMultiplayerGame();

  const onSubmit = (data) => {
    handleCreateGame(data);
  };

  const handleInviteUsers = (selectedUsers) => {
    console.log("Inviting users:", selectedUsers);
    setModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-l from-white via-gray-50 to-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl relative">
        <h1 className="text-center text-4xl font-semibold text-indigo-800 mb-5">
          Créer une Partie
        </h1>
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
        {!gameCode ? (
          <CreateGameForm onSubmit={onSubmit} loading={loading} />
        ) : (
          <div className="text-center">
            <div className="text-xl font-semibold mb-4">
              <CodeGame code={gameCode} />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              disabled
              className="w-full"
              onClick={() =>
                navigate(`/game/quiz/multiplayer/game/${gameCode}`)
              }
            >
              Commencer la Partie
            </Button>
          </div>
        )}
        {gameCode && (
          <div className="mt-4">
            <div className="flex justify-center">
              <Button
                className="flex  items-center gap-3"
                outline
                gradientDuoTone="purpleToPink"
                pill
                onClick={() => setModalOpen(true)}
              >
                <span>Partager le code</span>
                <RiShare2Fill className="ml-3" size={24} />
              </Button>
            </div>
            <div>
              <InviteUsersModal
                users={users}
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onInvite={handleInviteUsers}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateGame;
