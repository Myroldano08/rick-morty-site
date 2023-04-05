import axios from 'axios';

import {
  GET_CHARACTERS,
  GET_CHARACTER_DETAIL,
  GET_CHARACTERS_FILTER,
  ADD_FAVORITE,
  FILTER_CHARACTER,
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

export const getCharactersFilter = (status, specie, gender) =>{
  let concatStatus = '';
  if (status != '') {
    concatStatus = `status=${status}`
  }
  if (specie != '') {
    if (specie == 'alls') {
       console.log("specie: ",specie);
    }else{
      if(concatStatus.length > 0){
        concatStatus+= '&';
      }
      concatStatus += `species=${specie}`
    }
  }
  if (gender != '') {
    if(concatStatus.length > 0){
      concatStatus+= '&';
    }
    concatStatus += `gender=${gender}`
  }
  
  return async (dispatch) =>{
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?${concatStatus}`
      );
      return dispatch({
          type: GET_CHARACTERS_FILTER,
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

export const filterCharacter = (data) =>{
  console.log("filterCharacter: ", data);
  return{
      type: FILTER_CHARACTER,
      payload: data
  }
}

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

