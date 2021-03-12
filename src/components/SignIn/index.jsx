import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

const SignIn = () => {
  const history = useHistory();

  const submit = e => {
    e.preventDefault();

    history.push('/');
  };

  return (
    <div className="SignIn">
      <form onSubmit={submit}>
        <input type="text" />
        <input type="password" />
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
};

export default SignIn;
