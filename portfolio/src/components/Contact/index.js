import React, { useState } from "react";

import { checkEmail } from "../../utils/helpers";

function Contact() {
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = signUpForm;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", signUpForm);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isEmail = checkEmail(e.target.value);
      if (!isEmail) {
        setErrorMessage("Invalid Email!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
      console.log("Handle Form", signUpForm);
    }
  };

  return (
    <section>
      <form id="contact" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email"> Email: </label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div className="textArea">
          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
