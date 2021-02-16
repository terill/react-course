import React, { useState } from 'react';
import './index.css';
import classNames from 'classnames';
import { FaEdit, FaSave, FaTimesCircle } from 'react-icons/fa';

function Card(props) {
  const [cardState, setCardState] = [props.data, props.updateFn];
  const readOnly = props.readOnly;

  const [cardTempData, setCardTempData] = useState();

  const handleCheckboxChange = () => {
    setCardState({
      ...cardState,
      checked: !cardState.checked
    });
  };

  const enterEditMode = () => {
    setCardTempData({ ...cardState });
    setCardState({
      ...cardState,
      checked: false,
      editMode: true
    });
  };

  const onChangeHandler = (event, prop) => {
    setCardTempData({
      ...cardTempData,
      [prop]: event.target.value
    });
  };

  const saveChanges = () => {
    setCardState({
      ...cardTempData,
      editMode: false
    });
    setCardTempData(null);
  };

  const exitEditMode = () => {
    setCardState({
      ...cardState,
      editMode: false
    });
    setCardTempData(null);
  };

  const className = classNames({
    Card: true,
    checked: cardState.checked
  });

  return (
    <div className={className}>
      {cardState.editMode ? (
        <div className="editMode">
          <div className="header">
            <input
              onChange={e => onChangeHandler(e, 'caption')}
              value={cardTempData.caption}
              type="text"
            />
            <div className="actions">
              <FaSave onClick={saveChanges} title="Save changes" />
              <FaTimesCircle
                onClick={exitEditMode}
                title="Exit edit mode without saving changes"
              />
            </div>
          </div>
          <hr />
          <textarea
            onChange={e => onChangeHandler(e, 'text')}
            value={cardTempData.text}
          />
        </div>
      ) : (
        <div>
          <div className="header">
            <h2>{cardState.caption}</h2>
            <div className="actions">
              {readOnly ? null : <FaEdit onClick={enterEditMode} />}
              <input onChange={handleCheckboxChange} type="checkbox" />
            </div>
          </div>
          <hr />
          <p>{cardState.text}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
