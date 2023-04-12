import React,{useState} from 'react';
import './Login.css';
import {Link,useNavigate} from 'react-router-dom';
import axios from "axios";


function Login(){

  const history = useNavigate();
  const [email, setUserEmail] = useState('')
  const [password, setUserPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
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
          <div className="inputBox password">
          <input 
              value={password} 
              onChange={(e) => setUserPassword(e.target.value)} 
              type={showPassword ? 'text' : 'password'}              onKeyUp={(event) => event.target.setAttribute('value', event.target.value)}              className="name"
              required/>
          <label>Password</label>
          </div>
          <p style={{textAlign:'left'}}><input type="checkbox" 
          name="show" 
          onClick={toggleShowPassword}
          value="show"/> Show Password</p>   
          {errorMessage && <div className="error-alert"><p style={{color:'red'}}>{errorMessage}</p></div>}
          <button type="submit" className='login-button'>Login</button>
          </form>

        <p>Don't have an Account? <Link to="/signup">Create Account</Link></p>
        </div>
    
  );
}

export default Login;