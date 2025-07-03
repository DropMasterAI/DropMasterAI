import React, { useState } from 'react';

const initialBlocks = ['Hero Section', 'Product Grid', 'Testimonials'];

const DragDropEditor = () => {
  const [blocks, setBlocks] = useState(initialBlocks);

  const move = (index, direction) => {
    const newBlocks = [...blocks];
    const [moved] = newBlocks.splice(index, 1);
    newBlocks.splice(index + direction, 0, moved);
    setBlocks(newBlocks);
  };

  return (
    <div>
      <h2>Store Builder</h2>
      <ul>
        {blocks.map((block, i) => (
          <li key={i}>
            {block}
            <button disabled={i===0} onClick={() => move(i, -1)}>↑</button>
            <button disabled={i===blocks.length-1} onClick={() => move(i, 1)}>↓</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragDropEditor;