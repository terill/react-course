import React from 'react';
import './index.css';

function Card(props) {
  return (
    <div className="Card">
      <h2>{props.caption}</h2>
      <hr />
      <p>{props.children}</p>
    </div>
  );
}

export default Card;
