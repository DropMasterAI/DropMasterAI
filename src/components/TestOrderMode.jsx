import React, { useState } from 'react';

const TestOrderMode = () => {
  const [order, setOrder] = useState({ productId: '', quantity: 1 });
  const [result, setResult] = useState(null);

  const handleChange = e => setOrder({ ...order, [e.target.name]: e.target.value });
  const handleSubmit = async () => {
    const res = await fetch('/api/test-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div>
      <h2>Test Order Mode</h2>
      <input name="productId" placeholder="Product ID" value={order.productId} onChange={handleChange} />
      <input name="quantity" type="number" min="1" value={order.quantity} onChange={handleChange} />
      <button onClick={handleSubmit}>Simulate Order</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
};

export default TestOrderMode;