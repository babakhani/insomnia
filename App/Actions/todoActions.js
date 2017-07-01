export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const END_REFRESHING = 'END_REFRESHING';
export const START_REFRESHING = 'START_REFRESHING';
export const DATA_LOADED = 'DATA_LOADED';
export const SWITCH_LAYOUT = 'SWITCH_LAYOUT';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const UPDATE_LAST_UPDATE_TIME = 'UPDATE_LAST_UPDATE_TIME';

import I18n from 'react-native-i18n'
const moment = require('moment');
export function login (text) {
  return {type: LOGIN}
}

export function logout (index) {
  return {type: LOGOUT}
}


export function changeLanguage (languageSlug) {
  console.log(languageSlug);
  I18n.locale = languageSlug;
  return {
    type: CHANGE_LANGUAGE,
    language: languageSlug
  };
}

function updateLastUpdateTime (date) {
  return {
    type: UPDATE_LAST_UPDATE_TIME,
    date: date
  };
}

export function switchLayout () {
  return {
    type: SWITCH_LAYOUT
  };
}

function fetchSecretSauce () {
  return fetch('https://private-83128-exchange8.apiary-mock.com/exchange#');
}

function DoUpdateExchangeData (response) {
  return {
    type: DATA_LOADED,
    data: response
  };
}

export function updateExchangeData () {
  return dispatch => {
    return fetchSecretSauce().then((response) => response.json()).then((response) => {
        dispatch(updateLastUpdateTime(moment().format()));
        dispatch(endRefreshing());
        dispatch(DoUpdateExchangeData(response[0]));
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

