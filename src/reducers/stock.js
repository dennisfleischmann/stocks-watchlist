import { CHANGE_INPUT_TEXT, FETCH_STOCK_DATA } from '../actions/stock/actionTypes';

const initialState = {
  text: '',
  stocklist: [],
};

export default (state = initialState, action) => {
  switch (action.type){
    case CHANGE_INPUT_TEXT: {
      return Object.assign({}, state, { text: action.text });
    }
    case FETCH_STOCK_DATA: {

      const list = Object.assign([], state.stocklist);

      return Object.assign({}, state, { stocklist: [...list, action.stock] })
    }
    default:
      return state;
  }
};
