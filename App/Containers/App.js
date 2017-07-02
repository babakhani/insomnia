import React, {Component} from 'react'
import {Provider} from 'react-redux'
import RootContainer from './RootContainer'
import {store} from '../Redux/'
import '../Config';
import {StyleProvider} from 'native-base'
import getTheme from '../../native-base-theme/components'
import platform from '../../native-base-theme/variables/material'

// create our store
console.disableYellowBox = true;
/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Provider store={store}>
          <RootContainer />
        </Provider>
      </StyleProvider>
    )
  }
}

export default App
