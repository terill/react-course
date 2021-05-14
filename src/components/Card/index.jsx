import React, { useState } from 'react';
import './index.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

import CardHeader from './CardHeader';
import CardActions from './CardActions';
import CardBody from './CardBody';
import withLoadingDelay from '../../hoc/withLoadingDelay';

function Card(props) {
  const { data } = props;

  const [cardTempData, setCardTempData] = useState();

  const history = useHistory();

  const handleCheckboxChange = () => {
    props.updateCard({
      ...data,
      checked: !data.checked
    });
  };

  const enterEditMode = () => {
    setCardTempData({ ...data, checked: false });
    props.updateCard({
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
    props.updateCard({
      ...cardTempData,
      editMode: false
    });
    setCardTempData(null);
  };

  const exitEditMode = () => {
    props.updateCard({
      ...data,
      editMode: false
    });
    setCardTempData(null);
  };

  const openPage = () => {
    history.push(`/card/${data.id}`);
  };

  const className = classNames({
    Card: true,
    checked: data.checked
  });

  return (
    <div
      className={className}
      onDoubleClick={!data.editMode ? openPage : undefined}>
      <CardHeader
        editMode={data.editMode}
        editCaption={cardTempData ? cardTempData.caption : ''}
        onChange={onChangeHandler}
        caption={data.caption}
      />
      <hr />
      <CardBody
        editMode={data.editMode}
        editText={cardTempData ? cardTempData.text : ''}
        onChange={onChangeHandler}
        text={data.text}
      />
      <CardActions
        editMode={data.editMode}
        readOnlyMode={props.readOnlyMode}
        onSave={saveChanges}
        onExitEditMode={exitEditMode}
        onEnterEditMode={enterEditMode}
        onCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    caption: PropTypes.string,
    text: PropTypes.string,
    checked: PropTypes.bool,
    editMode: PropTypes.bool
  }).isRequired
};

const mapStateToProps = state => {
  return {
    readOnlyMode: state.main.app.readOnlyMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCard: card => dispatch({ type: 'UPDATE_CARD', card: card })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoadingDelay(Card));
