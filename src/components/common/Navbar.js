import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = props => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/">Past Spending</Link>
      <Link to="/">Budget Comparison</Link>
      <Link to="/">Projected Savings</Link>
    </nav>
  );
};

export default Navbar;
