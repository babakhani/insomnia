import {fromJS, Map} from 'immutable';
import {I18nManager} from 'react-native'
const initialState = fromJS({
  userInfo: {
    name: ""
  },
  credentials: {},
  isAuth: false,
  dataLoaded: false,
  dataType: 'Bah',
  refreshing: false,
  lastUpdateTime: '',
  language: 'fa',
  isRTL: false,
  exchangeData: {
    bill: [],
    coin: []
  }
});
export const mainReducers = (state, action) => {
  switch (action.type) {
    case 'LOGIN_BY_GOOGLE':
      let map11 = Map(state);
      let map22 = Map({
        'userInfo': action.userInfo,
        'credentials': action.credentials,
        'isAuth': true
      });
      return map11.merge(map22);
    case 'CHANGE_LANGUAGE':
      return state.set('language', action.language);
    case 'SWITCH_LAYOUT':
      const oldVal = state.get('isRTL');
      I18nManager.forceRTL(!oldVal);
      return state.set('isRTL', !oldVal);
    case 'START_REFRESHING':
      return state.set('refreshing', true);
    case 'END_REFRESHING':
      return state.set('refreshing', false);
    case 'LOGIN':
      return state.set('isAuth', true);
    case 'LOGOUT':
      return state.set('isAuth', false);
    case 'UPDATE_LAST_UPDATE_TIME':
      return state.set('lastUpdateTime', action.date);
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
export default mainReducers
