import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const initialState = {
  cards: [],
  app: {
    readOnlyMode: JSON.parse(localStorage.getItem('readOnlyMode'))
  }
};

export const fetchData = async dispatch => {
  const data = await axios
    .get(
      'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json'
    )
    .then(res =>
      res.data.slice(0, 15).map(obj => {
        return {
          id: obj.Number,
          caption: obj.Name,
          text: obj.About
        };
      })
    );
  dispatch({ type: 'DATA_LOADED', cards: data });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      const newCard = {
        id: uuidv4(),
        caption: 'New card',
        text: '...with some text',
        checked: false,
        editMode: false
      };
      return {
        ...state,
        cards: state.cards.concat(newCard)
      };
    case 'DELETE_SELECTED_CARDS':
      return {
        ...state,
        cards: state.cards.filter(card => !card.checked)
      };
    case 'UPDATE_CARD':
      return {
        ...state,
        cards: state.cards.map(card =>
          action.card.id === card.id ? action.card : card
        )
      };
    case 'DATA_LOADED':
      return {
        ...state,
        cards: action.cards
      };
    case 'TOGGLE_READ_ONLY_MODE':
      const appState = { ...state.app };
      appState.readOnlyMode = !appState.readOnlyMode;
      localStorage.setItem('readOnlyMode', JSON.stringify(appState.readOnlyMode));
      return {
        ...state,
        app: appState
      };
    default:
      return state;
  }
};

export default reducer;
