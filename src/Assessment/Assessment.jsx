import React from "react";
import QuizQuestions from "./QuizQuestions";
import "./Assessment.css";
import { useNavigate } from "react-router-dom";
const Assessment = () => {
  let navigate = useNavigate();
  const startAssessmentHandler = () => {
    let path = "/AssessmentQuestions";
    navigate(path);
  };
  return (
    <div className="assessment-container">
      <div className="assessment-name">{QuizQuestions.assessmentName}</div>
      <div className="assessment-minutes">
        Duration : <span> {QuizQuestions.duration_minutes} minutes</span>
      </div>
      <div className="assessment-description">{QuizQuestions.description}</div>
      <button className="assessment-button" onClick={startAssessmentHandler}>
        Let's Go
      </button>
    </div>
  );
};
export default Assessment;
