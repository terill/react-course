import React, { useContext } from 'react';
import './index.css';

import { CardsContext } from '../../api/CardsContext';
import { StyledCheckbox, StyledButton } from '../styled';
import CardList from '../../components/CardList';

const Home = props => {
  const {
    cardsState,
    updateCard,
    deleteSelectedCards,
    createNewCard
  } = useContext(CardsContext);

  return (
    <div className="Home">
      <StyledCheckbox
        onChange={props.changeReadOnlyMode}
        checked={props.readOnly}
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
        readOnly={props.readOnly}
        onCardUpdate={updateCard}
      />
    </div>
  );
};

export default Home;
