import { CHANGE_INPUT_TEXT, FETCH_STOCK_DATA } from './actionTypes';

export const changeInputText = text => {
  return {
    type: CHANGE_INPUT_TEXT,
    text,
  };
};

export const fetchStockData = (code) => {

const stock =   {
    code: 'MSDF', price: 64.98, currency: 'USD', exchange: 'NYSE', diff: -1.22, trend: 'down',
  }

/*
lets do some fetch data
*/
  return {
    type: FETCH_STOCK_DATA,
    stock: stock,
  };
};
