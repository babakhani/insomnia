import {AsyncStorage, I18nManager} from 'react-native'
import {createStore, compose, applyMiddleware} from 'redux'
//import {persistStore, autoRehydrate} from 'redux-persist'
import {persistStore, autoRehydrate} from 'redux-persist-immutable'
import reducer from '../Reducers'
import thunkMiddleware from 'redux-thunk'
import I18n from 'react-native-i18n'
import Immutable from 'immutable';
const initialState = Immutable.Map();
import {createLogger} from 'redux-logger'

import {
  changeLanguage
} from '../Actions/index'

const logger = createLogger({
  // ...options
});

export const store = compose(autoRehydrate(), applyMiddleware(thunkMiddleware, logger))(createStore)(reducer)
persistStore(store, {storage: AsyncStorage}, () => {
//  console.log('restored')
//  console.log(store)
//  console.log(store.getState().toJS().language)
//
//  store.dispatch(changeLanguage('fa'))
//  store.dispatch(changeLanguage('en'))
//  store.dispatch(changeLanguage('fa'))

});
