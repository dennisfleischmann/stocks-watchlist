import { combineReducers } from 'redux';
import ModalReducer from './modal';
import StockReducer from './stock';

export default combineReducers({
  modal: ModalReducer,
  stock: StockReducer,
});
