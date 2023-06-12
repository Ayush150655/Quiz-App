import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./Registration/RegistrationForm";
import Assessment from "./Assessment/Assessment";
import Card from "./Components/Card";
import AssessmentQuestions from "./Assessment/AssessmentQuestions";
import Summary from "./Result/Summary";

export default function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<RegistrationForm />} />
      <Route path="*" exact element={<RegistrationForm />} />
      <Route path="/Register" exact element={<RegistrationForm />} />
      <Route path="/Assessment" exact element={<Assessment />} />
      <Route path="/Card" exact element={<Card />} />
      <Route
        path="/AssessmentQuestions"
        exact
        element={<AssessmentQuestions />}
      />
      <Route path="/Summary" exact element={<Summary />} />
    </Routes>
  );
}
