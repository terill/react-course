import React, { useState, useContext } from 'react';
import './index.css';
import styled from 'styled-components';

import Header from '../../components/Header';
import CardList from '../../components/CardList';
import { CardsContext } from '../../api/CardsContext';

function App() {
  const [appState, setAppState] = useState({
    readOnly: false
  });

  const {
    cardsState,
    setCardsState,
    updateCard,
    deleteSelectedCards,
    createNewCard
  } = useContext(CardsContext);

  const changeReadOnlyMode = () => {
    setAppState({
      readOnly: !appState.readOnly
    });
    setCardsState(cardsState.map(card => ({ ...card, editMode: false })));
  };

  const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    z-index: -1;
    opacity: 0;

    & + label {
      cursor: pointer;
      user-select: none;
    }
    & + label:before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 1px solid #adb5bd;
      border-radius: 0.25em;
      margin-right: 4px;
    }

    &:checked + label::before {
      border-color: #0b76ef;
      background-color: #0b76ef;
    }
  `;

  const StyledButton = styled.button`
    margin-left: 8px;
    cursor: pointer;
  `;

  return (
    <div className="App">
      <Header />
      <div className="content">
        <StyledCheckbox
          onChange={changeReadOnlyMode}
          checked={appState.readOnly}
          id="readonly"
        />
        <label htmlFor="readonly">Read Only</label>
        <StyledButton onClick={deleteSelectedCards}>
          Delete selected cards
        </StyledButton>
        <StyledButton onClick={createNewCard}>Add a new card</StyledButton>
        <CardList
          className="listCards"
          data={cardsState}
          readOnly={appState.readOnly}
          onCardUpdate={updateCard}
        />
      </div>
    </div>
  );
}

export default App;
