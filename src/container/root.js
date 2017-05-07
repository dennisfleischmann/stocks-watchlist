import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/configureStore';

import StockPageContainer from './stockPageContainer';

export default () => (
  <Provider store={store}>
    <StockPageContainer />
  </Provider>
);
