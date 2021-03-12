import React from 'react';
import './index.css';

const SignIn = () => {
  return (
    <div className="SignIn">
      <form>
        <input type="text" />
        <input type="password" />
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
};

export default SignIn;
