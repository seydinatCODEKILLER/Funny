import { useState } from "react";
import { fetchQuizQuestions } from "../../services/quizzService";

const SoloQuizz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleStartQuiz = async () => {
    setIsLoading(true);
    try {
      const response = await fetchQuizQuestions("21", "easy");
      const { quiz } = response;
      console.log(quiz.questions);

      setQuestions(quiz.questions);
      setIsStarted(true);
    } catch (error) {
      console.error("Erreur lors du démarrage du quiz", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsFinished(true);
    }
  };

  if (!isStarted) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Mode Solo</h2>
        <p>Générez et répondez à un quiz!</p>
        <button
          onClick={handleStartQuiz}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Chargement..." : "Commencer"}
        </button>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Quiz Terminé!</h2>
        <p>
          Votre score : {score} / {questions.length}
        </p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4">{currentQuestion.question}</h3>
      <div className="flex flex-col gap-2">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() =>
              handleAnswer(option === currentQuestion.correctAnswer)
            }
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SoloQuizz;
