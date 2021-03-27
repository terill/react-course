import React from 'react';
import { connect } from 'react-redux';

import './index.css';

const Badge = props => {
  const cardsAmount = props.cardsAmount;

  return (
    <button className="Badge">
      Cards <span>{cardsAmount}</span>
    </button>
  );
};

const mapStateToProps = state => {
  return {
    cardsAmount: state.cards.length
  };
};

export default connect(mapStateToProps)(Badge);
