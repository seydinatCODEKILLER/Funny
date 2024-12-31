import QuestionScreen from "../../components/game/quizz/QuestionScreen";
import ResultScreen from "../../components/game/quizz/ResultScreen";
import StartScreen from "../../components/game/quizz/StartScreen";
import useStartQuizz from "../../hooks/useStartQuizz";

const SoloQuizz = () => {
  const {
    questions,
    currentQuestion,
    score,
    isLoading,
    isStarted,
    isFinished,
    startQuizz,
    handleAnswer,
  } = useStartQuizz();

  if (!isStarted) {
    return <StartScreen isLoading={isLoading} onStart={startQuizz} />;
  }

  if (isFinished) {
    return <ResultScreen score={score} totalQuestions={questions.length} />;
  }

  return <QuestionScreen question={currentQuestion} onAnswer={handleAnswer} />;
};

export default SoloQuizz;