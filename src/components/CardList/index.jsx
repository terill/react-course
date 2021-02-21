import React from 'react';

import Card from '../Card';

function CardList(props) {
  const listCards = props.data.map(card => (
    <Card
      data={card}
      key={card._id}
      readOnly={props.readOnly}
      onUpdate={props.onCardUpdate}
    />
  ));

  return <div className={props.className}>{listCards}</div>;
}

export default CardList;
