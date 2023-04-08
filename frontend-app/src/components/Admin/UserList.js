import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/userlist.css';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const deleteUser = (userId) => {
    axios.delete(`/users/${userId}`)
      .then(res => {
        setUsers(users.filter(user => user._id !== userId));
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="userlist-container">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td><button onClick={() => deleteUser(user._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
