import React, { useState } from 'react';
import './index.css';

function Card(props) {
  const [cardState, setCardState] = useState({ checked: false });

  const handleCheckboxChange = () => {
    setCardState({ checked: !cardState.checked });
  };

  return (
    <div className={'Card ' + (cardState.checked ? 'checked' : '')}>
      <h2>{props.caption}</h2>
      <hr />
      <p>{props.children}</p>
      <input onChange={handleCheckboxChange} type="checkbox" />
    </div>
  );
}

export default Card;
