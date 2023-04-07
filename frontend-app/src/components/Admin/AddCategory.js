import React, { useState } from 'react';
import './css/Add.css';

function AddCategory() {
  const [categoryId, setCategoryId] = useState('');
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="Add">
      <h1>Add Category</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="categoryId">Category ID:</label>
          <input type="text" id="categoryId" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="categoryName">Category Name:</label>
          <input type="text" id="categoryName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCategory;
