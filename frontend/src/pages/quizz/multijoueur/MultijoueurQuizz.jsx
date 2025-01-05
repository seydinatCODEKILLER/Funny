import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const MultijoueurQuizz = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-white to-blue-100 relative min-h-screen flex justify-center items-center font-roboto">
      <div className="flex justify-center items-center min-h-screen relative">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
          <h1 className="text-4xl font-bold text-center text-indigo-800 mb-4">
            Mode Multijoueur
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Créez une partie ou rejoignez-en une pour défier vos amis !
          </p>

          <div className="flex flex-col items-center gap-6">
            {/* Créer une partie */}
            <Button
              color="indigo"
              className="w-full py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
              onClick={() => navigate("/game/quiz/multijoueur/create")}
              aria-label="Créer une partie"
            >
              Créer une Partie
            </Button>

            {/* Rejoindre une partie */}
            <Button
              color="indigo"
              className="w-full py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
              onClick={() => navigate("/game/quiz/multijoueur/join")}
              aria-label="Rejoindre une partie"
            >
              Rejoindre une Partie
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultijoueurQuizz;
