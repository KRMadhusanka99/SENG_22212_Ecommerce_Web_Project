import React from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase'
import iconpic from '../Picture/icon.png'
import { useState, useEffect } from 'react';

function Header() {

  const [{ basket, loggedinuser }, dispatch] = useStateValue();
  const [categories, setCategories] = useState([]);

  //console.log("my basket ",basket)
  const logoutUser = () => {
    if (loggedinuser) {
      auth.signOut();
    }
  }
  useEffect(() => {
    fetch('http://localhost:8090/category/viewAll')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      <nav className="header">


        <img className='header-icon' src={iconpic} alt="icon" />

        <div className='header-search'>

          <input type="text" placeholder="Search here" className='header-search-input' />
          <FaSearch className="header-search-icon" /></div>

        <div className="navbar-outer">
        

          <div className="navbar-inner">
          
            {/*<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false">
                     <span class="navbar-toggler-icon"></span>
                </button>*/}


            <Link to='/'>Home</Link>
            <Link to={"/item"}>Product</Link>
            {/* <Link>Customer Service</Link>*/}

            {/* <div class="dropdown">
                      <button2 class="dropbtn">Category
                      </button2>
                      <div class="dropdown-content">
                        <a href="#">Laptop</a>
                        <a href="#">Mouse</a>
                        <a href="#">Haedphone</a>
                        <a href="#">Keyboard</a>
                        <a href="#">USB</a>
                        </div>
                        </div> */}
            <div class="dropdown">
              <button2 class="dropbtn">Category</button2>
              <div class="dropdown-content">
                {categories.map(category => (
                  <a href={`/item?category=${category.id}`} key={category.id}>{category.name}</a>
                ))}
              </div>
            </div>


            <Link to={"/contact"}>Contact Us</Link>


          </div>
        </div>


        <div className='header-nav'>

          {/*First Link*/}

          <Link to={!loggedinuser && "/login"} className='header-link'>
            <div onClick={logoutUser} className='header-option'>
              <span className='header-option-line2'>{loggedinuser ? 'Signout' : 'Sign In'}</span>
            </div>
          </Link>

          {/*Second Link*/}
          {/*}
         <Link to="/" className='header-link'>
            <div className='header-option'>
             <span className='header-option-line1'>Orders</span>
             <span className='header-option-line2'>& returns</span>
            </div>
              </Link> */}

        </div>


        {/*Basket Icon*/}
        <Link to="/cart" className='header-link'>
          <div className='header-option-basket'>
            <FaShoppingBasket />
            <span className='header-option-line2 header-product-count'>{basket?.length}</span>
          </div>
        </Link>

      </nav>
    </div>

  );
}

export default Header;
