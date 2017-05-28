import * as types from '../actions/stock/actionTypes';

const initialState = {
  text: '',
  stocklist: [],
  found: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_STOCK: {
      const stock = action.stock;
      const currentList = state.stocklist;
      return Object.assign({}, state, { stocklist: [...currentList, stock] });
    }
    case types.CHANGE_INPUT_TEXT: {
      return Object.assign({}, state, { text: action.text });
    }
    case types.REMOVE_STOCK: {
      const newStocklist = state.stocklist.filter((stock, index) => index !== action.index);
      return Object.assign({}, state, { stocklist: newStocklist });
    }
    case types.STOCK_FOUND: {
      return Object.assign({}, state, { found: action.found });
    }
    default:
      break;
  }
  return state;
};

