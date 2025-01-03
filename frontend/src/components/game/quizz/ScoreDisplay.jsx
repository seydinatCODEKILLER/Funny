/* eslint-disable react/prop-types */
const ScoreDisplay = ({ score, totalQuestions }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="text-center">
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
    </div>
  );
};

export default ScoreDisplay;
