import React from 'react';
import './index.css';
import classNames from 'classnames';

const Input = props => {
  const className = classNames({
    invalid: props.invalid && props.shouldValidate && props.touched
  });

  return (
    <div className="Input">
      <label>{props.label}</label>
      <input
        className={className}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
