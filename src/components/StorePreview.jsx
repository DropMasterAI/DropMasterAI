import React, { useEffect, useState } from 'react';

const StorePreview = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/store/preview')
      .then(res => res.json())
      .then(data => setProducts(data.products || data));
  }, []);

  return (
    <div>
      <h2>Store Preview</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} (Suppliers: {p.suppliers.join(', ')})</li>
        ))}
      </ul>
    </div>
  );
};

export default StorePreview;