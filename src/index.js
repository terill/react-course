import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';

import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

import main, { fetchData } from './store/main';
import auth from './store/auth';
import log from './utils/log';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

const store = createStore(
  combineReducers({ main, auth }),
  composeEnhancers(applyMiddleware(thunkMiddleware, log))
);
store.dispatch(fetchData);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
