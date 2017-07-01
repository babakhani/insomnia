import React, {Component} from 'react'
import {View, StatusBar, I18nManager} from 'react-native'
import {connect} from 'react-redux'
import NavigationRouter from '../Navigation/NavigationRouter'
import styles from './Styles/RootContainerStyles'


class RootContainer extends Component {
  constructor (props) {
    super(props);
    console.log('is app rtl')
    console.log(this.props.isRTL);
    I18nManager.forceRTL(this.props.isRTL);
  }

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
// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
  isAuth: state.toJS().isAuth,
  dataLoaded: state.toJS().dataLoaded,
  dataType: state.toJS().dataType,
  isRTL: state.toJS().isRTL
});


const mapDispatchToProps = {};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);

export default AppContainer;
