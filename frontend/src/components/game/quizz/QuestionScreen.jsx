/* eslint-disable react/prop-types */
const QuestionScreen = ({ question, onAnswer }) => (
  <div className="p-6">
    <h3 className="text-xl font-bold mb-4">{question.question}</h3>
    <div className="flex flex-col gap-2">
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(option === question.correctAnswer)}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);
export default QuestionScreen;
