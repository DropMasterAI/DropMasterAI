import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ padding: 20 }}>
    <h2>Welcome to DropMaster AI Home</h2>
    <Link to="/login"><button>Login to Continue</button></Link>
  </div>
);

export default Home;