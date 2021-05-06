import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

export default function () {
  let composeEnhancers = compose;
  if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const enhancer = composeEnhancers(applyMiddleware(thunk));

  const store = createStore(reducer, enhancer);

  return store;
}
