import React from 'react';
import './index.css';
import { connect } from 'react-redux';

import { StyledButton } from '../styled';
import CardList from '../../components/CardList';

const Home = props => {
  return (
    <div className="Home">
      {!props.readOnlyMode && (
        <>
          <StyledButton onClick={props.deleteSelectedCards}>
            Delete selected cards
          </StyledButton>
          <StyledButton onClick={props.createNewCard}>
            Add a new card
          </StyledButton>
        </>
      )}
      <CardList className="listCards" data={props.cards} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cards: state.main.cards,
    readOnlyMode: state.main.app.readOnlyMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNewCard: () => dispatch({ type: 'ADD_CARD' }),
    deleteSelectedCards: () => dispatch({ type: 'DELETE_SELECTED_CARDS' }),
    updateCard: card => dispatch({ type: 'UPDATE_CARD', card: card }),
    toggleReadOnlyMode: () => dispatch({ type: 'TOGGLE_READ_ONLY_MODE' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
