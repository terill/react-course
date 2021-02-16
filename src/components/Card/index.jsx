import React, { useState } from 'react';
import './index.css';
import classNames from 'classnames';
import { FaEdit, FaSave, FaTimesCircle } from 'react-icons/fa';

function Card(props) {
  const [cardState, setCardState] = useState({
    editMode: false,
    checked: false
  });

  const [cardData, setCardData] = [props.data, props.updateFn];

  const [cardTempData, setCardTempData] = useState();

  const handleCheckboxChange = () => {
    setCardState({
      ...cardState,
      checked: !cardState.checked
    });
  };

  const enterEditMode = () => {
    setCardTempData({ ...cardData });
    setCardState({
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
    setCardData({ ...cardTempData });
    exitEditMode();
  };

  const exitEditMode = () => {
    setCardTempData(null);
    setCardState({
      ...cardState,
      editMode: false
    });
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
            <h2>{cardData.caption}</h2>
            <div className="actions">
              <FaEdit onClick={enterEditMode} />
              <input onChange={handleCheckboxChange} type="checkbox" />
            </div>
          </div>
          <hr />
          <p>{cardData.text}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
