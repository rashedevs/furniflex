// import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="mt-8">
      <h1>Welcome to FurniFlex</h1>
      <Link to="/store">Browse Products</Link>
    </div>
  );
};

export default Home;
