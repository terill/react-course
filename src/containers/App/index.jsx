import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

import Header from '../../components/Header';
import Home from '../../components/Home';
import NotFound from '../../components/NotFound';
import SignIn from '../../components/SignIn';
import Settings from '../../components/Settings';
import CardPage from '../../components/CardPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/settings" component={Settings} />
            <Route path="/card/:id" component={CardPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
