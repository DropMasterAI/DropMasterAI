import React, { useEffect, useState } from 'react';

const MobilePreview = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/store/preview')
      .then(res => res.json())
      .then(data => setProducts(data.products || data));
  }, []);

  return (
    <div style={{ width: 360, border: '1px solid #ccc', padding: 10 }}>
      <h2>Mobile Preview</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MobilePreview;