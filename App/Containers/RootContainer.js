import React, {Component} from 'react'
import {View, StatusBar} from 'react-native'
import {connect} from 'react-redux'
import NavigationRouter from '../Navigation/NavigationRouter'
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content'/>
        <NavigationRouter />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({});
export default connect(null, mapDispatchToProps)(RootContainer)
