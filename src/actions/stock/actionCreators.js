
import { CHANGE_INPUT_TEXT, ADD_STOCK } from './actionTypes';

export const changeInputText = text => {
  return {
    type: CHANGE_INPUT_TEXT,
    text,
  };
};

export const addStock = (stock) => {
  return {
    type: ADD_STOCK,
    stock,
  };
};
