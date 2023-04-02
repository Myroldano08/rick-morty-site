import {
  GET_CHARACTERS,
  GET_CHARACTER_DETAIL,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  GET_FAVORITES
} from "../actions/types";

const initialState = {
  characters: [],
  characterDetail: {},
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