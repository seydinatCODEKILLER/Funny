import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveScore } from "../../../services/userService";
import ResultMessage from "./ResultMessage";
import ScoreDisplay from "./ScoreDisplay";

/* eslint-disable react/prop-types */
const ResultScreen = ({ gameId, score, totalQuestions }) => {
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const calculateResult = () => {
      if (score === totalQuestions) {
        setResult("win");
      } else if (score < totalQuestions && score > 0) {
        setResult("draw");
      } else {
        setResult("lose");
      }
    };
    calculateResult();
  }, [score, totalQuestions]);

  useEffect(() => {
    const savedScore = async () => {
      try {
        await saveScore(gameId, score);
      } catch (error) {
        console.error("Erreur lors de l'enregistrement du score", error);
      }
    };
    if (gameId && score >= 0) {
      savedScore();
    }
  }, [gameId, score, result]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-blue-100 font-roboto px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md text-center">
        <ResultMessage result={result} />
        <ScoreDisplay score={score} totalQuestions={totalQuestions} />
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
