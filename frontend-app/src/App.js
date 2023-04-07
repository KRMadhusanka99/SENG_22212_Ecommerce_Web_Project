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
import SingleProduct from './SingleProduct/SingleProduct';
import PaymentCheckout from './paymentCheckout/PaymentCheckout';
import CategoryPage from './CategoryPage/CategoryPage'
import AHeader from './components/Admin/header/Header';
import AFooter from './components/Admin/footer/Footer';
import AdminSignin from './components/Admin/AdminSignin';
import AdminLogout from './components/Admin/AdminLogout';
import Dashboard from './components/Admin/Dashboard';
import AddProduct from './components/Admin/AddProduct';
import AddBrand from './components/Admin/AddBrand';
import AddCategory from './components/Admin/AddCategory';
import ProductList from './components/Admin/ProductList';
import BrandList from './components/Admin/BrandList';
import CategoryList from './components/Admin/CategoryList';
import Inquiry from './components/Admin/Inquiry';
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
            <Route path="/checkout" element={<><Header/><PaymentCheckout/><Footer/></>}/>
            <Route path="/login" element={<><Header/><Login/><Footer/></>}/>
            <Route path="/item" element={<><Header/><Item/><Footer/></>}/>
            <Route path="/signup" element={<><Header/><SignUp/><Footer/></>}/>
            <Route path="/contact" element={<><Header/><Contact/><Footer/></>}/>
            <Route path="/singleProduct/:id" element={<><Header/><SingleProduct/><Footer/></>}/>
            <Route path="/categoryPage/:category" element={<><Header/><CategoryPage/><Footer/></>} />
            <Route path="/" element={<><Header/><Navbar/><Home/><Footer/></>}/>
            <Route exact path="/admin" element={<AdminSignin/>} />
            <Route exact path="/admin/logout" element={<><AHeader /><main><AdminLogout/></main><AFooter /></>} />
            <Route exact path="/admin/dashboard" element={<><AHeader /><main><Dashboard/></main><AFooter /></>} />
            <Route exact path="/admin/add-product" element={<><AHeader /><main><AddProduct/></main><AFooter /></>} />
            <Route exact path="/admin/add-brand" element={<><AHeader /><main><AddBrand/></main><AFooter /></>} />
            <Route exact path="/admin/add-category" element={<><AHeader /><main><AddCategory/></main><AFooter /></>} />
            <Route exact path="/admin/products" element={<><AHeader /><main><ProductList/></main><AFooter /></>} />
            <Route exact path="/admin/brands" element={<><AHeader /><main><BrandList/></main><AFooter /></>} />
            <Route exact path="/admin/categories" element={<><AHeader /><main><CategoryList/></main><AFooter /></>} />
            <Route exact path="/admin/inquiries" element={<><AHeader /><main><Inquiry/></main><AFooter /></>} />
          </Routes>
    </div>
  );
}

export default App;
