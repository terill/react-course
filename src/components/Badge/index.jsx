import React, { useContext } from 'react';
import './index.css';

import { CardsContext } from '../../api/CardsContext';

const Badge = () => {
  const [cards] = useContext(CardsContext);
  const amount = cards.length;

  return (
    <button className="Badge">
      Cards <span>{amount}</span>
    </button>
  );
};

export default Badge;
