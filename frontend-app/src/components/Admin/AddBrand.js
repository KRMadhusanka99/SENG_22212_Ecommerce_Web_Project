import React, { useState } from 'react';
import './css/Add.css';

function AddBrand() {
  const [brandId, setBrandId] = useState('');
  const [brandName, setBrandName] = useState('');
  const [brandLogo, setBrandLogo] = useState('');
  const [brandDetails, setBrandDetails] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="Add">
      <h1>Add Brand</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="brandId">Brand ID:</label>
          <input type="text" id="brandId" value={brandId} onChange={(e) => setBrandId(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="brandName">Brand Name:</label>
          <input type="text" id="brandName" value={brandName} onChange={(e) => setBrandName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="brandLogo">Brand Logo:</label>
          <input type="file" id="brandLogo" value={brandLogo} onChange={(e) => setBrandLogo(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="brandDetails">Brand Details:</label>
          <textarea id="brandDetails" value={brandDetails} onChange={(e) => setBrandDetails(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddBrand;