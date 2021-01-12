import {
  compose,
  combineReducers,
  createStore,
} from 'redux';

import reducers from '@store/reducers';

const createReduxStore = () => {
  let composeFunction;

  if (process.env.NODE_ENV !== 'production' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    composeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  } else {
    composeFunction = compose;
  }
  return createStore(combineReducers(reducers));
};

const store = createReduxStore();

export default store;
