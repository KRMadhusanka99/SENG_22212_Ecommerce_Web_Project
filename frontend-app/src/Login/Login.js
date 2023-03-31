import React,{useState} from 'react';
import './Login.css';
import {Link,useNavigate} from 'react-router-dom';
import {auth} from '../firebase';
import profile from "../Picture/a.png";
import email from "../Picture/email.jpg";
import pass from "../Picture/pass.png";


function Login(){

  const history = useNavigate();
  const [useremail, setUserEmail] = useState('')
  const [userpassword, setUserPassword] = useState('');

  const loginuser = event =>{
    event.preventDefault()
    auth.signInWithEmailAndPassword(useremail, userpassword)
    .then((auth) =>{
      history('/');
    })
    .catch(e => alert(e.message))
  }

  const signupuser = event =>{
    event.preventDefault()
    auth.createUserWithEmailAndPassword(useremail,userpassword)
    .then(auth =>{
      history('/');
    })
    .catch(e => alert(e.message))
  }

  return(
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Login</h1>
           <div>
            
          <img src={email} alt="email" className="email"/>
          <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email" placeholder="Email address" className="name"/>
          </div>
          <div className="second-input">
          <img src={pass} alt="pass" className="email"/>
          <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password" placeholder="password" className="name"/>
          
          </div>
          <div className="login-button"></div>
          <button onClick={loginuser} type="submit" className='login-button'>Login</button>
          </div>
        
        <p>By login, you agree to INNOVA's Terms and Conditions</p>
        <button onClick={signupuser} className='login-registration'>SignUp</button>
        </div>
       </div>
       

     </div>
    
  );
}

export default Login;