import { useState, useEffect } from "react";
import { fetchQuizQuestions } from "../services/quizzService";

const useStartQuizz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(30);
  const [gameId, setGameId] = useState("");

  const startQuizz = async ({ difficulty, category, nbQuestions }) => {
    setIsLoading(true);
    try {
      const response = await fetchQuizQuestions(
        category,
        difficulty,
        nbQuestions
      );
      setQuestions(response.quiz.questions);
      setGameId(response.quiz.gameId);
      setIsStarted(true);
    } catch (error) {
      console.error("Erreur lors du démarrage du quiz", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setQuestionTimeLeft(30);
    } else {
      setIsFinished(true);
    }
  };

  useEffect(() => {
    if (!isStarted || isFinished || questionTimeLeft <= 0) return;
    const timer = setInterval(() => {
      setQuestionTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted, isFinished, questionTimeLeft]);

  useEffect(() => {
    if (questionTimeLeft <= 0) {
      moveToNextQuestion();
    }
  }, [questionTimeLeft]);

  return {
    questions,
    currentQuestion: questions[currentQuestionIndex],
    score,
    isLoading,
    isStarted,
    isFinished,
    startQuizz,
    handleAnswer,
    gameId,
    questionTimeLeft,
  };
};

export default useStartQuizz;
