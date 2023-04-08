import React,{useState} from 'react';
import '../Login/Login.css';
import {useNavigate} from 'react-router-dom';
import axios from "axios";


function SignUp(){

  const history = useNavigate();
  const [email, setUserEmail] = useState('')
  const [password, setUserPassword] = useState('');
  const [firstname, setUserName] = useState('');
  const [lastname, setUserLastName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/authenticate/register", {
        firstname,
        lastname,
        email,
        password,
        phonenumber
      });
      console.log(response.data);
      alert("Register successfully. Verify your Acount. Check your email");
      history('/login', { replace: true });
      
    } catch (error) {
      console.log(error.response.data);
      setErrorMessage(error.response.data.message);
    }
  }

  return(
    <div className="box">
         <div className="imgs">
           <div className="container-image">
           </div>
        </div>
        <form onSubmit={handleSubmit}>
         <div>
           <h1>Registration</h1>
          <table>
            <tr><td>
            <div className="inputBox">
          <input value={firstname} onChange={(e) => setUserName(e.target.value)}  onKeyUp={(event) => event.target.setAttribute('value', event.target.value)} type="username" required/>
          <label>First Name</label>
          </div>
          </td>
          
          <td>
          <div className="inputBox">
          <input value={lastname} onChange={(e) => setUserLastName(e.target.value)} onKeyUp={(event) => event.target.setAttribute('value', event.target.value)} type="username" required/>
          <label>Last Name</label>
          </div>
          </td></tr>

          <tr><td colspan="2">
          <div className="inputBox next">
          <input value={email} onChange={(e) => setUserEmail(e.target.value)} onKeyUp={(event) => event.target.setAttribute('value', event.target.value)} type="email" required/>
          <label>Email Address</label></div></td></tr>
          <tr>
    	    <td colspan="2">
          <div className="inputBox next">
          <input value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} onKeyUp={(event) => event.target.setAttribute('value', event.target.value)} type="tel" required/>
          <label>Telephone Number</label></div></td></tr>

          <tr><td colspan="2">
          <div className="inputBox next">
          <input value={password} onChange={(e) => setUserPassword(e.target.value)} onKeyUp={(event) => event.target.setAttribute('value', event.target.value)} type="password" required/>
          <label>Password</label></div> </td>
         </tr></table>
         {errorMessage && <div className="error-alert"><p style={{color:'red'}}>{errorMessage}</p></div>}
          <p><input type="checkbox" 
          name="agree" 
          value="agree" 
          required/>  By register, agree to INNOVA's Terms and Conditions</p>       
          <div className="button2">
          <button  type="submit">Create Account</button></div>
          </div>
          </form>        
        </div>
    
  );
}

export default SignUp;