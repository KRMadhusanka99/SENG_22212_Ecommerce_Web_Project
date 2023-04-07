import React, { useState, useEffect } from 'react';
import './css/AdminSignin.css';

function AdminSignin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="signin-container">
      <h2>Admin Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default AdminSignin;
