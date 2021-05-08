import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';

import { login } from '../../store/auth';
import Input from '../Input';

const SignIn = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const history = useHistory();

  const [form, setForm] = useState({
    fields: {
      email: {
        type: 'text',
        label: 'Email',
        value: '',
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false
      },
      password: {
        type: 'password',
        label: 'Password',
        value: '',
        validation: {
          required: true,
          minLength: 8,
          minDigits: 1,
          minLetters: 1
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  });

  if (user) {
    return <Redirect to={'/'} />;
  }

  const submit = e => {
    e.preventDefault();

    const userData = {
      email: form.fields.email.value,
      password: form.fields.password.value
    };

    dispatch(login(userData));

    history.push('/');
  };

  const inputChangeHandler = (event, key) => {
    const updatedForm = { ...form.fields };
    const updatedFormElem = {
      ...updatedForm[key]
    };
    updatedFormElem.value = event.target.value;
    updatedFormElem.valid = checkValidity(
      updatedFormElem.value,
      updatedFormElem.validation
    );
    updatedFormElem.touched = true;
    updatedForm[key] = updatedFormElem;

    let formIsValid = true;
    for (const id in updatedForm) {
      if (updatedForm.hasOwnProperty(id)) {
        formIsValid = updatedForm[id].valid && formIsValid;
      }
    }

    setForm({ ...form, fields: updatedForm, formIsValid });
  };

  const checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.email) {
      isValid =
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          value
        ) && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.minDigits) {
      isValid = RegExp(`\\d{${rules.minDigits},}`).test(value) && isValid;
    }

    if (rules.minLetters) {
      isValid = RegExp(`[A-Za-z]{${rules.minLetters},}`).test(value) && isValid;
    }

    return isValid;
  };

  const formElementsArray = [];
  for (const key in form.fields) {
    if (form.fields.hasOwnProperty(key)) {
      formElementsArray.push({
        id: key,
        config: form.fields[key]
      });
    }
  }

  return (
    <div className="SignIn">
      <form onSubmit={submit}>
        {formElementsArray.map(formElem => (
          <Input
            key={formElem.id}
            type={formElem.config.type}
            value={formElem.config.value}
            label={formElem.config.label}
            invalid={!formElem.config.valid}
            shouldValidate={formElem.config.validation}
            touched={formElem.config.touched}
            onChange={e => inputChangeHandler(e, formElem.id)}
          />
        ))}
        <input type="submit" disabled={!form.formIsValid} value="Sign In" />
      </form>
    </div>
  );
};

export default SignIn;
