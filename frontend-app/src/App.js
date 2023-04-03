import './App.css';
//import Header from "./components/Header/Header";
//import Login from './components/User/Login/Login';
import Header from "./Header/Header";
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navabar'
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
            <Route path="/checkout" element={<><Header/><Checkout/><Footer/></>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<><Header/><Navbar/><Home/><Footer/></>}/> 
          </Routes>
    </div>
  );
}

export default App;
