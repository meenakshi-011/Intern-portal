import React, { useEffect, useState } from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/leaderboard")
      .then(res => res.json())
      .then(data => setLeaders(data));
  }, []);

  return (
    <div className="lb-wrapper">
      <h1 className="lb-title">🏆 Top Contributors</h1>
      <div className="lb-card">
        {leaders.length === 0 ? (
          <p className="lb-empty">No data available</p>
        ) : (
          leaders.map((person, index) => (
            <div key={index} className="lb-item">
              <span className={`lb-rank rank-${index + 1}`}>
                {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
              </span>
              <span className="lb-name">{person.name}</span>
              <span className="lb-amount">₹{person.raised}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Leaderboard;


