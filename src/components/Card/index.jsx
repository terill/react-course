import React, { useState } from 'react';
import './index.css';
import classNames from 'classnames';
import { FaEdit, FaSave, FaTimesCircle } from 'react-icons/fa';

function Card(props) {
  const { data, onUpdate: updateData, readOnly } = props;

  const [cardTempData, setCardTempData] = useState();

  const handleCheckboxChange = () => {
    updateData({
      ...data,
      checked: !data.checked
    });
  };

  const enterEditMode = () => {
    setCardTempData({ ...data });
    updateData({
      ...data,
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
    updateData({
      ...cardTempData,
      editMode: false
    });
    setCardTempData(null);
  };

  const exitEditMode = () => {
    updateData({
      ...data,
      editMode: false
    });
    setCardTempData(null);
  };

  const className = classNames({
    Card: true,
    checked: data.checked
  });

  return (
    <div className={className}>
      {data.editMode ? (
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
            <h2>{data.caption}</h2>
            <div className="actions">
              {!readOnly && <FaEdit onClick={enterEditMode} />}
              <input onChange={handleCheckboxChange} type="checkbox" />
            </div>
          </div>
          <hr />
          <p>{data.text}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
