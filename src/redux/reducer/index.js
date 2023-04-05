import {
  GET_CHARACTERS,
  GET_CHARACTER_DETAIL,
  GET_CHARACTERS_FILTER,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  GET_FAVORITES,
  FILTER_CHARACTER
} from "../actions/types";

const initialState = {
  characters: [],
  characterDetail: {},
  characterFilter: {status:'', specie: '', gender: ''},
  favorites: [],
  allCharacters: []
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload
      };
    case GET_CHARACTERS_FILTER:
      return {
        ...state,
        characters: payload
      };
    case FILTER_CHARACTER:
      console.log(payload);
      return {
        ...state,
        characterFilter: payload
      };
    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: payload
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload]
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((el) => el.id !== payload)
      };
    case GET_FAVORITES:
      return {
        ...state,
        favorites: state.favorites
      };

    default:
      return {
        ...state
      };
  }
};

export default rootReducer;