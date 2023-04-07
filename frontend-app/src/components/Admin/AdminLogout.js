import React from 'react';


function AdminLogout() {

  return (
    <div style={{ textAlign: "center"  }}>
      <h1>Admin Logout</h1>
      <p>Click the button below to logout.</p>
      <button style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} onClick={() => console.log('Logged out!')}>Logout</button>
    </div>
  );
}

export default AdminLogout;