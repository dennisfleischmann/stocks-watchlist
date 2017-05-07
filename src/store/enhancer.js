import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const enhancers = compose(
  applyMiddleware(thunk),
  window && window.devToolsExtension ? window.devToolsExtension() : x => x,
);

export default enhancers;
