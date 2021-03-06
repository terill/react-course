import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';

import { StyledCheckbox } from '../styled';

const Settings = () => {
  const readOnlyMode = useSelector(state => state.main.app.readOnlyMode);
  const dispatch = useDispatch();

  return (
    <div className="Home">
      <h2>Settings</h2>
      <br />
      <StyledCheckbox
        onChange={() => dispatch({ type: 'TOGGLE_READ_ONLY_MODE' })}
        checked={readOnlyMode}
        id="readonly"
      />
      <label htmlFor="readonly">Read Only</label>
    </div>
  );
};

export default Settings;
