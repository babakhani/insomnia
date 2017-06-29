export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const DATA_LOADED = 'DATA_LOADED';

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

function fetchSecretSauce () {
  return fetch('https://private-83128-exchange8.apiary-mock.com/exchange#');
}

export function incrementAsync () {
  return dispatch => {
    console.log("incrementAsync");
    return fetchSecretSauce().then((response) => response.json()).then((response) => {
        console.log("test fetch done");
        console.log(response);
        dispatch(increment(response[0]))
      }
    );
  };
}
