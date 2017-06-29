import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';

import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {createReducer} from 'redux-immutablejs'
import { handleActions } from 'redux-actions';

const logger = createLogger({
  // ...options
});
// actions.js
// ---------------------------------------
export const toglleSetting1 = setting_1 => ({
  type: 'TOGGLE_SETTING_ENABLED1',
  setting_1,
});

// reducers.js
// ---------------------------------------
initialState = {
  setting_1: {
    enabled: true,
  }
};

const setting_1 = handleActions(
  initialState,
  {
    'TOGGLE_SETTING_ENABLED1': (state) => state.merge({setting_1: {enabled: false}})
  }
);


export const geod = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_GEOD':
      return action.geod;
    case 'CLOSE_GEOD':
      return {};
    case 'TOGGLE_GEOD':
      let output = !state.enabled;
      return {
        enabled: output
      };
    default:
      return state;
  }
};

export const reducers = combineReducers({
  geod, setting_1
});

// store.js
export function configureStore (initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(logger, thunkMiddleware)
  );
  return store;
};

export const store = configureStore();