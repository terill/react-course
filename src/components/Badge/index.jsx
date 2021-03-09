import React, { useContext } from 'react';
import './index.css';

import { CardsContext } from '../../api/CardsContext';

const Badge = () => {
  const { cardsAmount } = useContext(CardsContext);

  return (
    <button className="Badge">
      Cards <span>{cardsAmount()}</span>
    </button>
  );
};

export default Badge;
