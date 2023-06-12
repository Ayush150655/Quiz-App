import React, { useState } from "react";
import "./RegistrationForm.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  let navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    setNameError("");
    setEmailError("");

    if (name.trim() === "") {
      setNameError("Please Enter your Name");
    }
    if (email.trim() === "") {
      setEmailError("Please Enter your Email");
    } else if (!isValidEmail(email)) {
      setEmailError("Please Enter correct Email");
    }
    if (name && email && isValidEmail(email)) {
      setName(name);
      setEmail(email);
      console.log("name = ", name);
      console.log("Email = ", email);
      let path = "/assessment";
      navigate(path);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    setNameError("");
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  return (
    <div className="registration-container">
      <form onSubmit={submitHandler} className="registration-form">
        <h1 className="registration-heading">Enter your Details</h1>
        <div className="inputbox">
          <label>Name</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter your Name"
            onChange={nameChangeHandler}
            required
          ></input>
        </div>
        {nameError && <span className="error">{nameError}</span>}
        <div>
          <label>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your Email"
            onChange={emailChangeHandler}
            required
          ></input>
        </div>
        {emailError && <span className="error">{emailError}</span>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
