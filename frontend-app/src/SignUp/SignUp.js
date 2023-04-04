import React,{useState} from 'react';
import './SignUp.css';
import {Link,useNavigate} from 'react-router-dom';
import {auth} from '../firebase';
import profile from "../Picture/a.png";
import email from "../Picture/email.jpg";
import pass from "../Picture/pass.png";
import user from "../Picture/f.png";
import phone from "../Picture/phone.png";


function SignUp(){

  const history = useNavigate();
  const [useremail, setUserEmail] = useState('')
  const [userpassword, setUserPassword] = useState('');
  const [username, setUserName] = useState('');
  const [userphonenumber, setPhoneNumber] = useState('');

  const Createuser = event =>{
    event.preventDefault()
    auth.createUserWithUsernameAndEmailAndNumberAndPassword(username, useremail, userphonenumber, userpassword)
    .then((auth) =>{
      history('/');
    })
    .catch(e => alert(e.message))
  }

  {/*const signupuser = event =>{
    event.preventDefault()
    auth.createUserWithEmailAndPassword(useremail,userpassword)
    .then(auth =>{
      history('/');
    })
    .catch(e => alert(e.message))
  }*/}

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
           <h1>Registration</h1>

           <div>
          <img src={user} alt="user" className="email"/>
          <input value={username} onChange={event => setUserName(event.target.value)} type="username" placeholder="First Name" className="name"/>
          </div>

          <div>
          <img src={user} alt="user" className="email"/>
          <input value={username} onChange={event => setUserName(event.target.value)} type="username" placeholder="Last Name" className="name"/>
          </div>

          <div>
          <img src={email} alt="email" className="email"/>
          <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email" placeholder="Email address" className="name"/>
          </div>

          <div>
          <img src={phone} alt="phone" className="email"/>
          <input value={userphonenumber} onChange={event => setPhoneNumber(event.target.value)} type="Number" placeholder="Tel-Number" className="name"/>
          </div>

          <div className="second-input">
          <img src={pass} alt="pass" className="email"/>
          <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password" placeholder="password" className="name"/>
          
          <div className="second-input">
          <img src={pass} alt="pass" className="email"/>
          <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password" placeholder="Confirm password" className="name"/>
          </div>

          </div>
          <p>you agree to INNOVA's Terms and Conditions</p>
          <div className="login-button"></div>
          <button onClick={Createuser} type="submit" className='login-button'>Create Account</button>
          </div>
        
        </div>
       </div>
       

     </div>
    
  );
}

export default SignUp;