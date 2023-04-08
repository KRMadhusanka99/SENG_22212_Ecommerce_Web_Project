import React,{useState} from 'react';
import './Login.css';
import {Link,useNavigate} from 'react-router-dom';
import {auth} from '../firebase';
import profile from "../Picture/a.png";
import Email from "../Picture/email.jpg";
import pass from "../Picture/pass.png";
import axios from "axios";


function Login(){

  const history = useNavigate();
  const [email, setUserEmail] = useState('')
  const [password, setUserPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/authenticate/login", {
        email,
        password
      });
      // localStorage.setItem("token", JSON.stringify(response.data));
      // console.log(localStorage.getItem("token"));
      console.log(response.data);
      history('/', { replace: true });
    } catch (error) {
      console.log(error.response.data);
      setErrorMessage(error.response.data.message);
    }
  };

  return(
         <div className="box">
           <h1>Login</h1>
           <form onSubmit={handleSubmit}>

           <div className="inputBox">
          <input 
              value={email} 
              onChange={(e) => setUserEmail(e.target.value)} 
              type="email" 
              onKeyUp={(event) => event.target.setAttribute('value', event.target.value)}              className="name"
              required/>
          <label>Email</label>
          </div>
          <div className="inputBox">
          <input 
              value={password} 
              onChange={(e) => setUserPassword(e.target.value)} 
              type="password" 
              onKeyUp={(event) => event.target.setAttribute('value', event.target.value)}              className="name"
              required/>
          <label>Password</label>
          {errorMessage && <div className="error-alert"><p style={{color:'red'}}>{errorMessage}</p></div>}
          </div>
          <button type="submit" className='login-button'>Login</button>
          </form>

        <p>Don't have an Account? <Link to="/signup">Create Account</Link></p>
        </div>
    
  );
}

export default Login;