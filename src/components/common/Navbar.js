import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = props => {
  return (
    <nav className="navbar">
      <Link to="/example-list">Example List</Link>
      <Link to="/profile-list">Profile List</Link>
      <Link to="/datavis">Data Vis</Link>
    </nav>
  );
};

export default Navbar;
