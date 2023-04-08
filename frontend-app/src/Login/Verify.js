import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Verify = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/authenticate/verify", {email})
      console.log(response.data);
      alert("Verification Mail send successfully. Check your Email Inbox");
      navigate('/', { replace: true });
    } catch (error) {
    console.log(error.response.data);
    setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
    <div className="box">
        <h1>Verify Your Account</h1>
    
    <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Enter Your Email here"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errorMessage && <div className="error-alert"><p style={{color:'red'}}>{errorMessage}</p></div>}

      <button type="submit">Verify Email</button>
    </form>
    </div>
</>
  );
};

export default Verify;
