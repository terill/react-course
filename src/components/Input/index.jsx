import React from 'react';
import './index.css';

const Input = props => {
  const classes = [];
  if (props.invalid && props.shouldValidate && props.touched) {
    classes.push('invalid');
  }

  return (
    <div className="Input">
      <label>{props.label}</label>
      <input
        className={classes.join(' ')}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
