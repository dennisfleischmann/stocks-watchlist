
import { createStore } from 'redux';
import reducer from '../reducers/';
import enhancer from './enhancer';

const store = createStore(
  reducer,
  enhancer,
);

export default store;
