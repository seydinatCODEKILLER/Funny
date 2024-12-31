import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Quizz = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-l from-white via-gray-50 to-gray-100 relative min-h-screen">
      {/* Animated Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-16 h-16 rounded-full bg-yellow-400 opacity-50 animate-bounce delay-100"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-green-400 opacity-50 animate-bounce delay-200"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-blue-400 opacity-50 animate-bounce delay-300"></div>
        <div className="absolute bottom-10 right-1/6 w-16 h-16 rounded-full bg-red-400 opacity-50 animate-bounce delay-400"></div>
      </div>

      <div className="flex justify-center items-center min-h-screen relative">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
          <h1 className="text-4xl font-bold text-center text-indigo-800 mb-4">
            Bienvenue dans le Quiz !
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Choisissez le mode de jeu pour commencer votre aventure ! Soyez prêt
            à tester vos connaissances et à vous amuser.
          </p>

          <div className="flex flex-col items-center gap-6">
            {/* Mode Solo Button */}
            <Button
              color="indigo"
              className="w-full py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
              onClick={() => navigate("/game/quiz/solo")}
              aria-label="Commencer le mode solo"
            >
              Mode Solo
            </Button>

            {/* Mode Multijoueur Button (Disabled) */}
            <Button
              color="gray"
              className="w-full py-3 text-lg font-semibold rounded-lg shadow-md cursor-not-allowed"
              disabled
              aria-label="Mode multijoueur (indisponible)"
            >
              Mode Multijoueur (à venir)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizz;
