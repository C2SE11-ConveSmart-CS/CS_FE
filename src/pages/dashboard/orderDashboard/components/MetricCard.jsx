import React from 'react';
import './MetricCard.css';

const MetricCard = ({ title, value, icon, bgColor }) => {
  return (
    <div className={`metric-card ${bgColor}`}>
      <div className="metric-icon">{icon}</div>
      <div className="metric-content">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default MetricCard;

