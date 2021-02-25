import React from 'react';
import './index.css';

function CardHeader(props) {
  return (
    <div className="header">
      {props.editMode ? (
        <input
          onChange={e => props.onChange(e, 'caption')}
          value={props.editCaption}
          type="text"
        />
      ) : (
        <h2>{props.caption}</h2>
      )}
    </div>
  );
}

export default CardHeader;
