import React, { useState } from "react";

const AnagramCard = ({ question }) => {
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const isCorrect = selectedBlocks.join(" ") === question.solution;

  const handleBlockClick = (block) => {
    setSelectedBlocks((prev) =>
      prev.includes(block) ? prev.filter((b) => b !== block) : [...prev, block]
    );
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
     <h2 className="text-xl font-bold mb-3" style={{ color: 'black' }}>
        {`${question.type}\n>  ${question.title}`}
    </h2>
      <div className="flex flex-wrap gap-2">
        {question.blocks.map((block, index) => (
          <button
            key={index}
            onClick={() => handleBlockClick(block.text)}
            className={`p-2 rounded-lg ${
              selectedBlocks.includes(block.text) ? "bg-blue-500 text-white" : "bg-gray-400"
            }`}
          >
            {block.text}
          </button>
        ))}
      </div>
      {selectedBlocks.length > 0 && (
        <div className={`mt-4 p-2 rounded-lg ${isCorrect ? "bg-green-500" : "bg-red-500"} text-white`}>
          {isCorrect ? "Correct!" : "Incorrect. Try Again."}
        </div>
      )}
    </div>
  );
};

export default AnagramCard;
