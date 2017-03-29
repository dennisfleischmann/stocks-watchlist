import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import StarterKit from './starterKitContainer';
import starterKitReducer from '../reducers/startKitReducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
   starterKitReducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
/* eslint-enable */

export default () => (
  <Provider store={store}>
    <StarterKit />
  </Provider>
);
