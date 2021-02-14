import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  const [cardsState, setCardsState] = useState([
    {
      _id: 1,
      caption: 'Card 1',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas nemo vitae quibusdam amet dolore libero inventore alias eaque et!'
    },
    {
      _id: 2,
      caption: 'Card 2',
      text:
        'Perferendis sit eligendi hic odit odio, aspernatur maxime quaerat architecto laudantium ad aliquam necessitatibus dolore vero earum blanditiis tenetur cumque sint!'
    }
  ]);

  const updateCard = c => {
    setCardsState(
      cardsState.map(card => {
        if (c._id === card._id) {
          return c;
        }
        return card;
      })
    );
  };

  const listCards = cardsState.map(card => (
    <Card data={card} updateFn={updateCard} />
  ));

  return (
    <div className="App">
      <Header />
      <div className="content">{listCards}</div>
    </div>
  );
}

export default App;
