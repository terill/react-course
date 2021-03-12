import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import axios from 'axios';

import Header from '../../components/Header';
import { CardsContext } from '../../api/CardsContext';
import Home from '../../components/Home';
import NotFound from '../../components/NotFound';
import SignIn from '../../components/SignIn';

function App() {
  const [appState, setAppState] = useState({
    readOnly: false
  });

  const { cardsState, setCardsState } = useContext(CardsContext);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json'
      )
      .then(res => {
        setCardsState(
          res.data.slice(0, 15).map(obj => ({
            _id: obj.Number,
            caption: obj.Name,
            text: obj.About
          }))
        );
      });
  }, []);

  const changeReadOnlyMode = () => {
    setAppState({
      readOnly: !appState.readOnly
    });
    setCardsState(cardsState.map(card => ({ ...card, editMode: false })));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  readOnly={appState.readOnly}
                  changeReadOnlyMode={changeReadOnlyMode}
                />
              )}
            />
            <Route path="/signin" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
