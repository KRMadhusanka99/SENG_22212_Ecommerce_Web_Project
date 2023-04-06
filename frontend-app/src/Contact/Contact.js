import React, { useState } from "react";
import './Contact.css';
import Header from '../Header/Header'

const FORM_ENDPOINT = ""; // TODO - fill on the later step

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
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
<<<<<<< HEAD
    <div className="outer">
=======
    <div>
    <Header/> 
>>>>>>> main
    <div className="main1">
       
     <div className="sub-main1">
   
      <div>
     <h1>Contact Us</h1>
     <div>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="second-input1" >
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="name"
          required
        />
      </div>
      <div className="second-input1">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="name"
          required
        />
      </div>
      <div className="second-input1">
        <textarea
          placeholder="Your message"
          name="message"
          className="name1"
          required
        />
      </div>
      <div className="second-input1">
        <button
          className="b1"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Contact;