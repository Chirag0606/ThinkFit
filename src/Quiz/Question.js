// Question.js
import React, { useState } from 'react';

function Question({ question, onAnswerSubmit }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    if (selectedOption) {
      onAnswerSubmit(selectedOption);
      setSelectedOption('');
    }
  };

  return (
    <div className="question">
      <h2>{question.text}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
      {selectedOption && (
        <button className="next-button" onClick={handleNextClick}>
          Next
        </button>
      )}
    </div>
  );
}

export default Question;
