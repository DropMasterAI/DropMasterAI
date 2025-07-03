import React, { useState } from 'react';

const OnboardingWizard = () => {
  const [form, setForm] = useState({ name: '', niche: '' });
  const [response, setResponse] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async () => {
    const res = await fetch('/api/onboarding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setResponse(data);
  };

  return (
    <div>
      <h2>Onboarding Wizard</h2>
      <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
      <input name="niche" placeholder="Your Niche" value={form.niche} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default OnboardingWizard;