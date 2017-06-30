export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const END_REFRESHING = 'END_REFRESHING';
export const START_REFRESHING = 'START_REFRESHING';
export const DATA_LOADED = 'DATA_LOADED';
export const UPDATE_LAST_UPDATE_TIME = 'UPDATE_LAST_UPDATE_TIME';
const moment = require('moment');
export function login (text) {
  return {type: LOGIN}
}

export function logout (index) {
  return {type: LOGOUT}
}

function increment (response) {
  return {
    type: DATA_LOADED,
    data: response
  };
}

function updateLastUpdateTime (date) {
  return {
    type: UPDATE_LAST_UPDATE_TIME,
    date: date
  };
}



function fetchSecretSauce () {
  return fetch('https://private-83128-exchange8.apiary-mock.com/exchange#');
}

export function updateExchangeData () {
  return dispatch => {
    return fetchSecretSauce().then((response) => response.json()).then((response) => {
        dispatch(updateLastUpdateTime( moment().format() ));
        dispatch(endRefreshing());
        dispatch(increment(response[0]));
      }
    );
  };
}

export function endRefreshing () {
  return {
    type: END_REFRESHING
  };
}

export function startRefreshing () {
  return {
    type: START_REFRESHING
  };
}

export function incrementAsync () {
  dispatch(startRefreshing())
  return dispatch => {
    return fetchSecretSauce().then((response) => response.json()).then((response) => {
        console.log("test fetch done");
        console.log(response);
        dispatch(increment(response[0]))
      }
    );
  };
}
