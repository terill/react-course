import React, { useState } from 'react';
import './index.css';
import classNames from 'classnames';

import CardHeader from './CardHeader';
import CardActions from './CardActions';
import CardBody from './CardBody';

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
    setCardTempData({ ...data, checked: false });
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
      <CardHeader
        editMode={data.editMode}
        editCaption={cardTempData && cardTempData.caption}
        onChange={onChangeHandler}
        caption={data.caption}
      />
      <hr />
      <CardBody
        editMode={data.editMode}
        editText={cardTempData && cardTempData.text}
        onChange={onChangeHandler}
        text={data.text}
      />
      <CardActions
        editMode={data.editMode}
        readOnly={readOnly}
        onSave={saveChanges}
        onExitEditMode={exitEditMode}
        onEnterEditMode={enterEditMode}
        onCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
}

export default Card;
