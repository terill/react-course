import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import Card from '../Card';

const CardPage = props => {
  const [card] = props.cards.filter(c => c.id === props.match.params.id);
  return (
    <div className="CardPage">
      <Card data={card} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cards: state.cards
  };
};

export default connect(mapStateToProps)(CardPage);
