/* eslint-disable react/prop-types */
import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { BsStars } from "react-icons/bs";

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
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {question.question}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-transform duration-300 ${
                selectedOption === option
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-100  hover:scale-105 hover:shadow-md"
              }`}
            >
              <TextInput
                type="checkbox"
                color="blue"
                className=""
                checked={selectedOption === option}
                onChange={() => handleSelection(option)}
              />
              <span className="text-gray-800 font-medium text-center">
                {option}
              </span>
            </label>
          ))}
        </div>
        <Button
          onClick={handleSubmit}
          className="mt-6 w-full  text-lg font-bold  transition-transform duration-300 disabled:cursor-not-allowed"
          disabled={selectedOption === null}
          gradientMonochrome="purple"
        >
          Soumettre
          <BsStars className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default QuestionScreen;
