/* eslint-disable react/prop-types */
import { TextInput } from "flowbite-react";

const OptionCard = ({ option, selectedOption, onSelectOption }) => {
  return (
    <label
      className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-transform duration-300 ${
        selectedOption === option
          ? "border-blue-600 bg-blue-50"
          : "border-gray-100 hover:scale-105 hover:shadow-md"
      }`}
    >
      <TextInput
        type="checkbox"
        color="blue"
        checked={selectedOption === option}
        onChange={() => onSelectOption(option)}
      />
      <span className="text-gray-800 font-medium text-center">{option}</span>
    </label>
  );
};

export default OptionCard;
