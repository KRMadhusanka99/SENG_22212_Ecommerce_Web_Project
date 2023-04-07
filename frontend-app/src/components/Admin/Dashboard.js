import React from 'react';
import './css/Dashboard.css';

function Dashboard() {

  return (
    <div className="dashboard-container">
      <div className="dashboard-summary">
        <div className="dashboard-summary-item">
          <h2>Pending Orders</h2>
          <p>10</p>
        </div>
        <div className="dashboard-summary-item">
          <h2>Today's Sales</h2>
          <p>Rs 100 000</p>
        </div>
        <div className="dashboard-summary-item">
          <h2>Today's Income</h2>
          <p>Rs 50 000</p>
        </div>
        <div className="dashboard-summary-item">
          <h2>Page Views</h2>
          <p>1000</p>
        </div>
      </div>
      <div className="dashboard-charts">
        <h2>Sales and Income</h2>
      </div>
    </div>
  );
}

export default Dashboard;
