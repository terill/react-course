import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CardsContext = createContext();

export const CardsProvider = props => {
  const [cardsState, setCardsState] = useState([]);

  const updateCard = c => {
    setCardsState(cardsState.map(card => (c._id === card._id ? c : card)));
  };

  const deleteSelectedCards = () => {
    setCardsState(cardsState.filter(card => !card.checked));
  };

  const createNewCard = () => {
    const newCard = {
      _id: uuidv4(),
      caption: 'New card',
      text: '...with some text',
      checked: false,
      editMode: false
    };
    setCardsState([...cardsState, newCard]);
  };

  const cardsAmount = () => cardsState.length;

  return (
    <CardsContext.Provider
      value={{
        cardsState,
        setCardsState,
        updateCard,
        deleteSelectedCards,
        createNewCard,
        cardsAmount
      }}>
      {props.children}
    </CardsContext.Provider>
  );
};
