import React,{useState} from 'react';
import './Header.css';
import {FaSearch} from 'react-icons/fa';
import {FaShoppingBasket} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useStateValue} from '../StateProvider';
import {auth} from '../firebase'
import iconpic from '../Picture/icon.png'
import '../CategoryPage/CategoryPage'
import { Button } from '@material-ui/core';

function Header() {

  const [{basket,loggedinuser}, dispatch] = useStateValue();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/searchProduct/${searchQuery}`;
    }
  };

  //console.log("my basket ",basket)
  const logoutUser =()=>{
    if(loggedinuser){
        auth.signOut();
    }
  }
  return (
    <div>
    <nav className="header">
      
    
      <img className='header-icon' src={iconpic} alt="icon"/>
      
        <div className='header-search'>
        <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search here"
              className="header-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="header-search-button">
              <FaSearch />
            </button>
          </form>
            {/* <input type="text" placeholder="Search here" className='header-search-input'onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    const searchQuery = event.target.value;
                    // Perform search based on the searchQuery
                     window.location.href = `/searchProduct/${searchQuery}`;
                    // <Link to={`/searchProduct/${searchQuery}`}></Link>
                  }
                }}/> */}
            </div>
       
        <div className="navbar-outer">
        
        <div className="navbar-inner">
                {/*<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false">
                     <span class="navbar-toggler-icon"></span>
                </button>*/}
             
                
                     <Link to='/'>Home</Link>
                     <Link to={"/item" }>Product</Link>
                     {/* <Link>Customer Service</Link>*/}
                  
                    <div class="dropdown">
                      <Link class="dropbtn">Category
                      </Link>
                      <div class="dropdown-content">
                        <Link to={"/categoryPage/Laptop"}>Laptop</Link>
                        <Link to={"/categoryPage/Mouse"}>Mouse</Link>
                        <Link to={"/categoryPage/Headphone"}>Headphone</Link>
                        <Link to={"/categoryPage/Keyboard"}>Keyboard</Link>
                        <Link to={"/categoryPage/USB"}>USB</Link>
                        <Link to={"/categoryPage/Desktop"}>Desktop</Link>
                        </div>
                        </div>
                     <Link to={"/contact" }>Contact Us</Link>
                    

            </div>
                </div>
                

        <div className='header-nav'>
    
        {/*First Link*/}

        <Link to={!loggedinuser && "/login" } className='header-link'>
            <div onClick={logoutUser}className='header-option'>
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
                <FaShoppingBasket/>
                <span className='header-option-line2 header-product-count'>{basket?.length}</span>
            </div>
        </Link>  
        
    </nav>
    </div>
    
  );
}

export default Header;
