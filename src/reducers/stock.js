import { CHANGE_INPUT_TEXT, ADD_STOCK, REMOVE_STOCK } from '../actions/stock/actionTypes';

import _ from 'lodash';

const initialState = {
  text: '',
  stocklist: [],
};

export default (state = initialState, action) => {
  switch (action.type){
    case CHANGE_INPUT_TEXT: {
      return Object.assign({}, state, { text: action.text });
    }
    case ADD_STOCK: {

      const list = Object.assign([], state.stocklist);
      const newStockListItem = exposeStockData(action.stock);

      return Object.assign({}, state, { stocklist: [...list, newStockListItem] })
    }
    case REMOVE_STOCK: {
        const removedList = _.remove(state.stocklist, (stock, index) => {
          return index === action.index;
        });
        const list = Object.assign([], state.stocklist);
      return Object.assign({}, state, { stocklist: list })
    }
    default:
      return state;
  }
};

const exposeStockData = (stock) => {
  return {
    code: stock.code,
    price: stock.dataset_data.data[0][4],
    exchange: '?',
    diff: (stock.dataset_data.data[1][4] - stock.dataset_data.data[0][4]).toFixed(2),
  };
};
