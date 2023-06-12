import React from "react";
import "./Summary.css";
import Chart from "./Chart";

const Summary = ({
  getCorrectAnswers,
  getWrongAnswers,
  getScore,
  getTotalQuestionsAnswered,
  totalQuestions,
}) => {
  return (
    <div className="summary-container">
      <div className="summary-title">Thank you for your response</div>
      <h2>Total Questions Answered : {getTotalQuestionsAnswered}</h2>
      <span className="summary-stats">
        <div>Correct Answers: {getCorrectAnswers}</div>
        <div>Wrong Answers: {getWrongAnswers}</div>
      </span>
      <span>
        <Chart
          correctAnswers={getCorrectAnswers}
          wrongAnswers={getWrongAnswers}
        />
        <div className="summary-score">
          Score: {getScore} / {totalQuestions * 5}
        </div>
      </span>
    </div>
  );
};

export default Summary;
