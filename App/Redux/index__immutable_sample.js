import {compose, createStore, applyMiddleware} from 'redux';
import Immutable from 'immutable';
import rootReducer from '../Reducers';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
const initialState = Immutable.Map();
import {persistStore, autoRehydrate} from 'redux-persist'

console.log(initialState)
const logger = createLogger({
  // ...options
});
// store.js
export function configureStore (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(logger, thunkMiddleware),
      autoRehydrate()
    )
  );
  return persistStore(store);
};

export const store = configureStore();