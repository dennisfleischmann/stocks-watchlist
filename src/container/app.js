import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/configureStore';

import StockListPage from './stockListPage';

export default () => (
  <Provider store={store}>
    <StockListPage />
  </Provider>
);
