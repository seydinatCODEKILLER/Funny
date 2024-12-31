/* eslint-disable react/prop-types */
const ResultScreen = ({ score, totalQuestions }) => (
  <div className="p-6 text-center">
    <h2 className="text-2xl font-bold">Quiz Terminé!</h2>
    <p>
      Votre score : {score} / {totalQuestions}
    </p>
  </div>
);
export default ResultScreen;
