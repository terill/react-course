import React from 'react';
import './index.css';

function CardBody(props) {
  return (
    <div className="body">
      {props.editMode ? (
        <textarea
          onChange={e => props.onChange(e, 'text')}
          value={props.editText}
        />
      ) : (
        <p>{props.text}</p>
      )}
    </div>
  );
}

export default CardBody;
