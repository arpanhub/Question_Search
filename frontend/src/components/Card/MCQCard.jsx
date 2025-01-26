import React, { useState } from "react";

const MCQCard = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index, isCorrectAnswer) => {
    setSelectedOption(index);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-3" style={{ color: 'black' }}>
        {`${question.type}\n>  ${question.title}`}
    </h2>
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionClick(index, option.isCorrectAnswer)}
          className={`block w-full text-left p-2 rounded-lg mb-2 ${
            selectedOption === index
              ? option.isCorrectAnswer
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
              : "bg-gray-400"
          }`}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default MCQCard;
