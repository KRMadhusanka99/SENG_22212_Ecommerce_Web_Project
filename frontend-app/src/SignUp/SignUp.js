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
  const [confirmpassword, setConfirmPassword] = useState('');
  const [username, setUserName] = useState('');
  const [userlname, setUserLastName] = useState('');
  const [userphonenumber, setPhoneNumber] = useState('');

  const Createuser = event =>{
    event.preventDefault()
    auth.createUserWithUsernameAndUserLastNameAndEmailAndNumberAndPassword(username, userlname, useremail, userphonenumber, userpassword, confirmpassword)
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
    <div className="main2">
     <div className="sub-main2">
       <div>
       
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
        </div>
         <div>
           <h1>Registration</h1>
          <table>
            <tr><td>
           <div>
          <img src={user} alt="user" className="email"/>
          <input value={username} onChange={event => setUserName(event.target.value)} type="username" placeholder="First Name" className="name"/>
          </div>
          </td>
          
          <td>
          <div className="second-input">
          <img src={user} alt="user" className="email"/>
          <input value={userlname} onChange={event => setUserLastName(event.target.value)} type="username" placeholder="Last Name" className="name"/>
          </div>
          </td></tr>

          <tr><td>
          <div className="second-input">
          <img src={email} alt="email" className="email"/>
          <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email" placeholder="Email address" className="name"/>
          </div></td>

    	    <td>
          <div className="second-input">
          <img src={phone} alt="phone" className="email"/>
          <input value={userphonenumber} onChange={event => setPhoneNumber(event.target.value)} type="Number" placeholder="Tel-Number" className="name"/>
          </div></td></tr>

          <tr><td>
          <div className="second-input">
          <img src={pass} alt="pass" className="email"/>
          <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password" placeholder="password" className="name"/>
          </div> </td>
          
          <td><div className="second-input">
          <img src={pass} alt="pass" className="email"/>
          <input value={confirmpassword} onChange={event => setConfirmPassword(event.target.value)} type="password" placeholder="Confirm password" className="name"/>
          </div></td></tr></table>

          
          <p>you agree to INNOVA's Terms and Conditions</p>
          <div className="button2"></div>
          <button onClick={Createuser} type="submit" className='button2'>Create Account</button>
          </div>
        
        </div>
       </div>
       

     </div>
    
  );
}

export default SignUp;