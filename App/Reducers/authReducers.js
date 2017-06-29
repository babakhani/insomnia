import {fromJS, Map} from 'immutable';
import {handleActions} from 'redux-actions';

const initialState = fromJS({
  isAuth: false,
  dataLoaded: false,
  dataType: 'Bah',
  exchangeData: ['Json Data']
});

//const todoReducers = handleActions({
//  LOGIN: (state) => (
//    state.set('isAuth', true)
//  ),
//
//  DATA_LOADED: (state, action) => (
//    state.set('dataLoaded', true)
//  ),
//
//  LOGOUT: (state) => (
//    state.set('isAuth', false)
//  ),
//
//}, initialState);

export const todoReducers = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return state.set('isAuth', true);
    case 'LOGOUT':
      return state.set('isAuth', false);
    case 'DATA_LOADED':
      const map1 = Map(state);
      const map2 = Map({
        'dataType': action.data.type,
        'exchangeData': action.data,
        'dataLoaded': true
      })
      return map1.merge(map2);
    default:
      return initialState;
  }
};

export default todoReducers
