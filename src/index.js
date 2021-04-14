import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

import rootReducer, { fetchData } from './store/reducer';

const log = ({ getState }) => next => action => {
  console.log('[redux] action:', action);
  const result = next(action);
  console.log('[redux] next state:', getState());
  return result;
};

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, log));
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
