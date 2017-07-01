import {fromJS, Map} from 'immutable';
import {I18nManager} from 'react-native'
const initialState = fromJS({
  isAuth: false,
  dataLoaded: false,
  dataType: 'Bah',
  refreshing: false,
  lastUpdateTime: '',
  isRTL: false,
  exchangeData: {
    bill: [],
    coin: []
  }
});
export const todoReducers = (state, action) => {
  switch (action.type) {
    case 'SWITCH_LAYOUT':
      const oldVal = state.get('isRTL');
      console.log('change layout to rtl')
      console.log(!oldVal)
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
      console.log('DATA_LOADED');
      console.log(state);
      console.log(action.data);
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
