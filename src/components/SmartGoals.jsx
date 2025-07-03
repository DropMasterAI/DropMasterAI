import React, { useEffect, useState } from 'react';

const SmartGoals = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch('/api/goals')
      .then(res => res.json())
      .then(data => setGoals(data.goals));
  }, []);

  return (
    <div>
      <h2>Smart Goals</h2>
      <ul>{goals.map((g, i) => <li key={i}>{g}</li>)}</ul>
    </div>
  );
};

export default SmartGoals;