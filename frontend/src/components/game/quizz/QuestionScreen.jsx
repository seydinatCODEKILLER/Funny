/* eslint-disable react/prop-types */
import { useState } from "react";

const QuestionScreen = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      onAnswer(selectedOption === question.correctAnswer);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-gray-100 font-roboto px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          {question.question}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-transform duration-300 ${
                selectedOption === option
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300 bg-gray-100 hover:scale-105 hover:shadow-lg"
              }`}
            >
              <input
                type="checkbox"
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                checked={selectedOption === option}
                onChange={() => handleSelection(option)}
              />
              <span className="text-gray-800 font-medium">{option}</span>
            </label>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition-transform duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={selectedOption === null}
        >
          Soumettre
        </button>
      </div>
    </div>
  );
};

export default QuestionScreen;
