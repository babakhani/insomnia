import authReducers from './authReducers'
export default authReducers;


//import {fromJS} from 'immutable';
//import {handleActions} from 'redux-actions';
//
//const initialState = {
//  isAuth: true
//};
//
//
//const todoReducers = handleActions({
//  LOGIN: (state) => (
//    Object.assign({}, state, {
//      isAuth: true
//    })
//  ),
//  LOGOUT: (state) => (
//    Object.assign({}, state, {
//      isAuth: false
//    })
//  ),
//}, initialState);
////
////export const todoReducers = (state = {}, action) => {
////  switch (action.type) {
////    case 'LOGIN':
////      return {
////        isAuth: true
////      };
////    case 'LOGOUT':
////      return {
////        isAuth: false
////      };
////    default:
////      return initialState;
////  }
////};
//export default todoReducers
