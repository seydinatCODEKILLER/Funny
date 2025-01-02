/* eslint-disable react/prop-types */
import { Button } from "flowbite-react";
import { useState } from "react";
import { BsStars } from "react-icons/bs";
import OptionCard from "./OptionCard";
import TimerCircle from "./TimerCircle";

const QuestionScreen = ({ question, onAnswer, questionTimeLeft }) => {
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
        <div className="flex flex-col gap-3 items-center mb-6">
          <h3 className="text-xl font-medium text-gray-800">
            {question.question}
          </h3>
          {/* Timer Circle */}
          <div className="flex justify-center mb-6">
            <TimerCircle timeLeft={questionTimeLeft} maxTime={30} />
          </div>
        </div>
        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <OptionCard
              key={index}
              option={option}
              selectedOption={selectedOption}
              onSelectOption={handleSelection}
            />
          ))}
        </div>
        <Button
          onClick={handleSubmit}
          className="mt-6 w-full text-lg font-bold transition-transform duration-300 disabled:cursor-not-allowed"
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
