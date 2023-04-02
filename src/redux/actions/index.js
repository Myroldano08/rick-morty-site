import axios from 'axios'
import {
  GET_CHARACTERS,
  GET_CHARACTER_DETAIL,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  GET_FAVORITES,
  FILTER,
  ORDER
} from "../actions/types";

export const getCharacters = (id) =>{
    return async (dispatch) =>{
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${id}`
        );
        return dispatch({
            type: GET_CHARACTERS,
            payload: response.data.results
        })
    }
}

export const getCharacterDetail = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return dispatch({
      type: GET_CHARACTER_DETAIL,
      payload: response.data
    });
  };
};

export const addFavorite = (favorite) =>{
    return{
        type: ADD_FAVORITE,
        payload: favorite
    }
}

export const deleteFavorite = (id) =>{
    return{
        type: DELETE_FAVORITE,
        payload: id
    }
}

export const getFavorites = ()=>{
  return{
    type: GET_FAVORITES
  }
}

export const filterCards = (status) =>{
  return{
    type: FILTER,
    payload: status
  }
}

export const orderCards = (id)=>{
  return{
    type: ORDER,
    payload: id
    
  }
}

