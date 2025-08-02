import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({ totalUsers: 0, totalRaised: 0 });

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard")
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Intern-potral Dashboard</h1>
        <h2 className="dashboard-subtitle">Overview</h2>
      <div className="dashboard-body">
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Total Users</h3>
            <p>{stats.totalUsers}</p>
          </div>
          <div className="dashboard-card">
            <h3>Total Raised</h3>
            <p>₹{stats.totalRaised}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

