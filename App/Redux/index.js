import {AsyncStorage} from 'react-native'
import {createStore, compose, applyMiddleware} from 'redux'
//import {persistStore, autoRehydrate} from 'redux-persist'
import {persistStore, autoRehydrate} from 'redux-persist-immutable'
import reducer from '../Reducers'
import thunkMiddleware from 'redux-thunk'

import Immutable from 'immutable';
const initialState = Immutable.Map();
import {createLogger} from 'redux-logger'

const logger = createLogger({
  // ...options
});

export const store = compose(autoRehydrate(), applyMiddleware(thunkMiddleware))(createStore)(reducer)
persistStore(store, {storage: AsyncStorage}, () => {
  console.log('restored')
}).purge();


