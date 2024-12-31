import { useNavigate } from "react-router-dom";
import CardGame from "../components/card/CardGame";
import { MdQuiz } from "react-icons/md";

const Room = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-blue-100 overflow-hidden font-roboto">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-40 top-10 left-1/4 animate-float"></div>
        <div className="absolute w-64 h-64 bg-pink-300 rounded-full blur-3xl opacity-40 bottom-20 right-1/4 animate-float-reverse"></div>
        <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-40 top-1/2 left-1/3 animate-float-slow"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-indigo-700 drop-shadow-md">
            Mes Jeux
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Plongez dans notre collection captivante de jeux interactifs.
            Développez vos compétences tout en vous amusant. Sélectionnez votre
            défi et commencez à jouer dès maintenant !
          </p>
        </header>

        {/* Game Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          <CardGame
            title="Quizz"
            description="Testez vos connaissances avec des milliers de questions captivantes !"
            onClick={() => navigate("/game/quiz")}
            icon={MdQuiz}
          />
          {/* Future games can be added here */}
        </div>
      </div>
    </div>
  );
};

export default Room;
