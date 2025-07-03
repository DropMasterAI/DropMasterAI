import React, { useEffect, useState } from 'react';

const AIAssistantHints = () => {
  const [hints, setHints] = useState([]);

  useEffect(() => {
    fetch('/api/hints')
      .then(res => res.json())
      .then(data => setHints(data.hints));
  }, []);

  return (
    <div>
      <h2>AI Assistant Hints</h2>
      <ul>{hints.map((h, i) => <li key={i}>{h}</li>)}</ul>
    </div>
  );
};

export default AIAssistantHints;