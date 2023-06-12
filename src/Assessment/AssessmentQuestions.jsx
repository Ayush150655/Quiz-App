import React, { useState } from "react";
import Card from "../Components/Card";
import QuizQuestions from "./QuizQuestions";
import Summary from "../Result/Summary";

const AssessmentQuestions = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [summary, setSummary] = useState({
    correctAnswers: 0,
    wrongAnswers: 0,
    score: 0,
    questionAnswered: 0,
  });
  const { questions } = QuizQuestions;
  const { question, options, answer, skill } = questions[activeQuestion];

  const nextQuestionHandler = () => {
    setSelectedAnswerIndex(null);
    setSummary((prev) =>
      selectedOption
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
            questionAnswered: prev.questionAnswered + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
            questionAnswered: prev.questionAnswered + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };
  const onSelectedAnswer = (selectedAnswer, index) => {
    setSelectedAnswerIndex(index);
    if (selectedAnswer.name === answer) {
      setSelectedOption(true);
    } else {
      setSelectedOption(false);
    }
  };

  const quitAssessmentHandler = () => {
    setShowResult(true);
  };
  const optionsHandler = () => {
    return options;
  };
  const questionHandler = () => {
    return question;
  };
  const skillHandler = () => {
    return skill;
  };
  const getLength = () => {
    return questions.length;
  };
  return (
    <div>
      {!showResult ? (
        <Card
          question={questionHandler()}
          options={optionsHandler()}
          onNext={nextQuestionHandler}
          onQuit={quitAssessmentHandler}
          onSelectedAnswer={onSelectedAnswer}
          selectedAnswerIndex={selectedAnswerIndex}
          getSkills={skillHandler()}
          allQuestionsLength={getLength()}
          currentQuestion={activeQuestion}
        />
      ) : (
        <Summary
          getCorrectAnswers={summary.correctAnswers}
          getWrongAnswers={summary.wrongAnswers}
          getScore={summary.score}
          getTotalQuestionsAnswered={summary.questionAnswered}
          totalQuestions={getLength()}
        />
      )}
    </div>
  );
};

export default AssessmentQuestions;
