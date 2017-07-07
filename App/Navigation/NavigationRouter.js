import React, {Component} from 'react'
import {Scene, Router, ActionConst} from 'react-native-router-flux'
import NavigationDrawer from './NavigationDrawer'
import LaunchScreen from '../Containers/LaunchScreen'
import ExchangeView from '../Containers/ExchangeView'
import ContactUs from '../Containers/Contactus'
import Settings from '../Containers/Settings'
/* **************************
 * Documentation: https://github.com/aksonov/react-native-router-flux
 ***************************/
class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene initial key='launchScreen' component={LaunchScreen} title='LaunchScreen'/>
          <Scene key='exchangeView' component={ExchangeView}/>
          <Scene key='contactUs' component={ContactUs}/>
          <Scene key='settings' component={Settings}/>
        </Scene>
      </Router>
    )
  }
}
export default NavigationRouter
