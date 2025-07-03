import React, { useState } from 'react';

const FeedbackButton = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    await fetch('/api/feedback', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ message })
    });
    setStatus('Feedback sent!');
  };

  return (
    <div>
      <h2>Feedback</h2>
      <textarea value={message} onChange={e => setMessage(e.target.value)} rows="4" cols="50" />
      <br />
      <button onClick={handleSubmit}>Send Feedback</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default FeedbackButton;