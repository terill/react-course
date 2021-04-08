import React from 'react';
import './index.css';
import Card from '../Card';

function CardList(props) {
  const listCards = props.data.map(card => <Card data={card} key={card.id} />);

  return <div className={props.className}>{listCards}</div>;
}

export default CardList;
