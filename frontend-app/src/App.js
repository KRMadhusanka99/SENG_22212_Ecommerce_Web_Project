import './App.css';
//import Header from "./components/Header/Header";
//import Login from './components/User/Login/Login';
import Header from "./Header/Header";
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navabar'
import Item from './Item/Item'
import SignUp from './SignUp/SignUp'
import Contact from './Contact/Contact'
import{auth} from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';

function App() {

  const [{loggedinuser, dispatch}] = useStateValue()

  useEffect(() => {

    const unsubsribe = auth.onAuthStateChanged((userauth) => {

       if(userauth){
        dispatch({
          type: 'SET_LOGIN',
          user: userauth
        })
       }else{
        dispatch({
          type: 'SET_LOGIN',
          user: null
        })
       }
       
    })

  return() => {
    unsubsribe();
  }

},[])


  return (
    <div className="App">
      <Routes>
            <Route path="/cart" element={<><Header/><Cart/></>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/item" element={<Item/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<><Header/><Navbar/><Home/><Footer/></>}/> 
          </Routes>
    </div>
  );
}

export default App;
