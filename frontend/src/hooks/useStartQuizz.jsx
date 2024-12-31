import { useState } from "react";
import { fetchQuizQuestions } from "../services/quizzService";

const useStartQuizz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const startQuizz = async () => {
    setIsLoading(true);
    try {
      const response = await fetchQuizQuestions("21", "easy");
      setQuestions(response.quiz.questions);
      setIsStarted(true);
    } catch (error) {
      console.error("Erreur lors du démarrage du quiz", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsFinished(true);
    }
  };
  return {
    questions,
    currentQuestion: questions[currentQuestionIndex],
    score,
    isLoading,
    isStarted,
    isFinished,
    startQuizz,
    handleAnswer,
  };
};

export default useStartQuizz;
