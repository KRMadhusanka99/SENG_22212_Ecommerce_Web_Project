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
<<<<<<< HEAD
import SingleProduct from './SingleProduct/SingleProduct';
=======
>>>>>>> main

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
<<<<<<< HEAD
            <Route path="/login" element={<><Header/><Login/><Footer/></>}/>
            <Route path="/item" element={<><Header/><Item/><Footer/></>}/>
            <Route path="/signup" element={<><Header/><SignUp/><Footer/></>}/>
            <Route path="/contact" element={<><Header/><Contact/><Footer/></>}/>
            <Route path="/singleProduct/:id" element={<><Header/><SingleProduct/><Footer/></>}/>
=======
            <Route path="/login" element={<Login/>}/>
            <Route path="/item" element={<Item/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/contact" element={<Contact/>}/>
>>>>>>> main
            <Route path="/" element={<><Header/><Navbar/><Home/><Footer/></>}/> 
          </Routes>
    </div>
  );
}

export default App;
