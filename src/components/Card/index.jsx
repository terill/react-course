import React, { useState } from 'react';
import './index.css';
import classNames from 'classnames';
import { FaEdit, FaSave, FaTimesCircle } from 'react-icons/fa';

function Card(props) {
  const [cardState, setCardState] = useState({
    caption: props.caption,
    text: props.children,
    editMode: false,
    checked: false
  });

  const handleCheckboxChange = () => {
    setCardState({
      ...cardState,
      checked: !cardState.checked
    });
  };

  const enterEditMode = () => {
    setCardState({
      ...cardState,
      checked: false,
      editMode: true,
      oldCaption: cardState.caption,
      oldText: cardState.text
    });
  };

  const handleCaptionChange = event => {
    setCardState({
      ...cardState,
      caption: event.target.value
    });
  };

  const handleTextChange = event => {
    setCardState({
      ...cardState,
      text: event.target.value
    });
  };

  const saveChanges = () => {
    setCardState({
      ...cardState,
      editMode: false
    });
  };

  const dontSaveChanges = () => {
    setCardState({
      ...cardState,
      caption: cardState.oldCaption,
      text: cardState.oldText,
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
              onChange={handleCaptionChange}
              value={cardState.caption}
              type="text"
            />
            <div className="actions">
              <FaSave onClick={saveChanges} title="Save changes" />
              <FaTimesCircle
                onClick={dontSaveChanges}
                title="Exit edit mode without saving changes"
              />
            </div>
          </div>
          <hr />
          <textarea onChange={handleTextChange} value={cardState.text} />
        </div>
      ) : (
        <div>
          <div className="header">
            <h2>{cardState.caption}</h2>
            <div className="actions">
              <FaEdit onClick={enterEditMode} />
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
