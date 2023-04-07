import React, { useState } from 'react';
import './css/Add.css';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [productPhoto, setProductPhoto] = useState(null);
  const [categoryId, setCategoryId] = useState('');
  const [brandId, setBrandId] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="Add">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="productDetails">Product Details:</label>
          <textarea id="productDetails" value={productDetails} onChange={(e) => setProductDetails(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="productPhoto">Product Photo:</label>
          <input type="file" id="productPhoto" accept="image/*" value={productPhoto}onChange={(e) => setProductPhoto(e.target.files[0])} />
        </div>
        <div className="form-group">
          <label htmlFor="categoryId">Category:</label>
          <select id="categoryId" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
            <option value="">Select Category</option>
            {/*  render options dynamically from category data */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="brandId">Brand:</label>
          <select id="brandId" value={brandId} onChange={(e) => setBrandId(e.target.value)} required>
            <option value="">Select Brand</option>
            {/*  render options dynamically from brand data */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Price:</label>
          <input type="number" id="productPrice" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="stockQuantity">Stock Quantity:</label>
          <input type="number" id="stockQuantity" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
