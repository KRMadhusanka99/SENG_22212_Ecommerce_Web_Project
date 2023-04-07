import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import user from '../pictures/user-icon.webp';
import logo from '../pictures/logo.png';
import { BellOutlined } from '@ant-design/icons';


function AHeader() {
  return (
    <header className="aheader">
      <nav className="nav">
        <div className="nav-logo">
          <Link to="/admin/dashboard"><img src={logo} alt="Logo" /></Link>
        </div>
        <ul className="nav-links">
            <div className='nav-links imp'>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
          <li><Link to="/admin/orders">Orders</Link></li>
          <li className="adropdown">
            <Link>Catalog</Link>
            <div className="adropdown-content">
              <Link to="/admin/add-product">Add Product</Link>
              <Link to="/admin/products">Products List</Link>
              <Link to="/admin/add-brand">Add Brand</Link>
              <Link to="/admin/brands">Brand List</Link>
              <Link to="/admin/add-category">Add Category</Link>
              <Link to="/admin/categories">Category List</Link>
            </div>
          </li>
          <li></li>
          </div>
          <div className='nav-links signin'>
          <li><Link to="/admin/logout">Logout</Link></li>
          <li><Link to="/admin/profile"><img src={user} alt="User Icon" /></Link></li>
          <li><Link to="/admin/inquiries" style={{fontSize:'22px'}}><BellOutlined /></Link></li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default AHeader;
