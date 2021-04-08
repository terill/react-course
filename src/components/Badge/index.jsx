import React from 'react';
import { useSelector } from 'react-redux';

import './index.css';

const Badge = () => {
  const cardsAmount = useSelector(state => state.cards.length);

  return (
    <button className="Badge">
      Cards <span>{cardsAmount}</span>
    </button>
  );
};

export default Badge;
