import React from "react";
import "./Card.css";

const Card = ({
  question,
  options,
  onNext,
  onQuit,
  onSelectedAnswer,
  selectedAnswerIndex,
  getSkills,
  allQuestionsLength,
  currentQuestion,
}) => {
  const handleOptionClick = (option, index) => {
    return onSelectedAnswer(option, index);
  };

  return (
    <div className="card">
      <h2>
        {currentQuestion + 1}/{allQuestionsLength}
      </h2>
      <div className="question">{question}</div>
      <div className="skill">Competency : {getSkills}</div>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option, index)}
            className={selectedAnswerIndex === index ? "selected-answer" : ""}
          >
            {option.name}
          </li>
        ))}
      </ul>
      <div className="buttons">
        <button onClick={onQuit} className="quit">
          End Test
        </button>
        <button onClick={onNext} disabled={selectedAnswerIndex === null}>
          {currentQuestion === allQuestionsLength - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Card;
