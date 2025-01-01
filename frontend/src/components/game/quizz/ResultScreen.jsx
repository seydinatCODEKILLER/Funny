import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ResultScreen = ({ score, totalQuestions }) => {
  const navigate = useNavigate();
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-blue-100 font-roboto px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 animate-bounce">
          🎉 Quiz Terminé! 🎉
        </h2>
        <p className="text-lg font-medium text-gray-700 mb-6">
          Vous avez obtenu un score de :
        </p>
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-4xl font-bold rounded-full py-4 px-8 inline-block mb-6 shadow-lg">
          {score} / {totalQuestions}
        </div>
        <p className="text-lg font-medium text-gray-800">
          Soit <span className="text-blue-600 font-bold">{percentage}%</span> de
          réponses correctes.
        </p>
        <div className="mt-3 flex justify-center">
          <Button
            onClick={() => navigate("/game/quiz")}
            gradientDuoTone="greenToBlue"
            pill
            className=""
          >
            Retourner au Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
