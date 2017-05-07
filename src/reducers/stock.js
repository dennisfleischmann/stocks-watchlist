import _ from 'lodash';
import { exposeStockData } from '../utils/mapper';
import {
  CHANGE_INPUT_TEXT,
  ADD_STOCK,
  REMOVE_STOCK,
} from '../actions/stock/actionTypes';

const initialState = {
  text: '',
  stocklist: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_TEXT: {
      return Object.assign({}, state, { text: action.text });
    }
    case ADD_STOCK: {
      const list = Object.assign([], state.stocklist);
      const newStockListItem = exposeStockData(action.stock);

      return Object.assign({}, state, { stocklist: [...list, newStockListItem] });
    }
    case REMOVE_STOCK: {
      _.remove(state.stocklist, (stock, index) => (index === action.index));
      const list = Object.assign([], state.stocklist);
      return Object.assign({}, state, { stocklist: list });
    }
    default:
      return state;
  }
};

