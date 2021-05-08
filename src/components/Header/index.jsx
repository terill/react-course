import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';

import { logout as logoutReducer } from '../../store/auth';
import Badge from '../Badge';
import { StyledButton } from '../styled';

const Header = () => {
  const user = useSelector(state => state.auth.user);
  const isAdmin = useSelector(state => state.auth.isAdmin);
  const dispatch = useDispatch();

  const history = useHistory();

  const logout = () => {
    dispatch(logoutReducer());
    history.push('/');
  };

  return (
    <header className="Header">
      <div>
        <Link to="/">Home</Link>
        {isAdmin && <Link to="/settings">Settings</Link>}
        {user ? (
          <>
            <StyledButton onClick={logout}>Log Out</StyledButton>
            <span>Hello, {user.email}</span>
          </>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </div>
      <Badge />
    </header>
  );
};

export default Header;
