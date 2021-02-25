import React from 'react';
import './index.css';
import { FaEdit, FaSave, FaTimesCircle } from 'react-icons/fa';

function CardActions(props) {
  return (
    <div className="actions">
      {props.editMode ? (
        <>
          <FaSave onClick={props.onSave} title="Save changes" />
          <FaTimesCircle
            onClick={props.onExitEditMode}
            title="Exit edit mode without saving changes"
          />
        </>
      ) : (
        <>
          {!props.readOnly && <FaEdit onClick={props.onEnterEditMode} />}
          <input onChange={props.onCheckboxChange} type="checkbox" />
        </>
      )}
    </div>
  );
}

export default CardActions;
