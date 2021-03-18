import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import Badge from '../Badge';

const Header = () => (
  <header className="Header">
    <div>
      <Link to="/">Home</Link>
      <Link to="/signin">Sign In</Link>
    </div>
    <Badge />
  </header>
);

export default Header;
