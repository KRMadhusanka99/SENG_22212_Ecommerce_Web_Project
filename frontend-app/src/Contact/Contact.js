import React, { useState } from "react";
import '../Login/Login.css';
const FORM_ENDPOINT = "";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
           <div className="box">
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
        </div>
      </>
    );
  }

  return (
     <div className="box">
     <h1>Contact Us</h1>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="inputBox" >
        <input
          type="text"
          placeholder="Your name"
          name="name"
          required
        />
      </div>
      <div className="inputBox">
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div className="inputBox message">
        <textarea
          placeholder="Your message"
          name="message"
          required
        />
      </div>
        <button type="submit">
          Send a message
        </button>
    </form>
    </div>
  );
};

export default Contact;