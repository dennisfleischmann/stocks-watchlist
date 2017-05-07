
import { CHANGE_INPUT_TEXT, ADD_STOCK, REMOVE_STOCK, STOCK_FOUND } from './actionTypes';

export const changeInputText = text => ({
  type: CHANGE_INPUT_TEXT,
  text,
});

export const addStock = stock => ({
  type: ADD_STOCK,
  stock,
});

export const removeStock = index => ({
  type: REMOVE_STOCK,
  index,
});

export const stockFound = found => ({
  type: STOCK_FOUND,
  found,
});
