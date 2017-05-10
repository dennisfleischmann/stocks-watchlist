import _ from 'lodash';
import { exposeStockData } from '../utils/mapper';
import {
  CHANGE_INPUT_TEXT,
  ADD_STOCK,
  REMOVE_STOCK,
  STOCK_FOUND,
} from '../actions/stock/actionTypes';

const initialState = {
  text: '',
  stocklist: [],
  found: true,
};

export default (state = initialState, action) => {
  console.log('action=======>', action);
  switch (action.type) {
    case CHANGE_INPUT_TEXT: {
      return Object.assign({}, state, { text: action.text });
    }
    case ADD_STOCK: {
      const list = Object.assign([], state.stocklist);
      const newStockListItem = action.stock;

      return Object.assign({}, state, { stocklist: [...list, newStockListItem] });
    }
    case REMOVE_STOCK: {
      _.remove(state.stocklist, (stock, index) => (index === action.index));
      const list = Object.assign([], state.stocklist);
      return Object.assign({}, state, { stocklist: list });
    }
    case STOCK_FOUND: {
      return Object.assign({}, state, { found: action.found });
    }
    default:
      return state;
  }
};

