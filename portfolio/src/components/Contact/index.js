import React, { useState } from "react";

import { checkEmail } from "../../utils/helpers";

//Contact form with some boilerplate code from instructor
function Contact() {
  //default state for the contact form is every field empty.
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  //default errorMessage state is nothing
  const [errorMessage, setErrorMessage] = useState("");
  //destructuring state
  const { name, email, message } = contactForm;

  //just submit, no backend functionality yet
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //change handler that checks if the input is a valid email
  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isEmail = checkEmail(e.target.value);
      if (!isEmail) {
        setErrorMessage("Invalid email entered!");
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
    //if everything is correct the new state is set to the input
    if (!errorMessage) {
      setContactForm({ ...contactForm, [e.target.name]: e.target.value });
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
