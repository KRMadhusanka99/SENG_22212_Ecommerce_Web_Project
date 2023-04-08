import React, { useState } from 'react';
import axios from 'axios';
import './css/addadmin.css';

const AddAdmin = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('firstName', firstname);
      formData.append('lastName', lastname);
      formData.append('email', email);
      formData.append('phoneNo', phonenumber);
      formData.append('password', password);
      formData.append('photo', photo);
      await axios.post('/admin/addadmin', formData);
      alert('Admin added successfully.Verify your Acount. Check your email');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNo('');
      setPassword('');
      setPhoto('');
    } catch (error) {
      console.error(error);
      setMessage('Failed to add admin!');
    }
  };

  return (
    <div className="form-container">
      <h1>Add Admin</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phoneNo"
            value={phonenumber}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo</label>
          <input
            type="file"
            className="form-control-file"
            id="photo"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Admin
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default AddAdmin;
