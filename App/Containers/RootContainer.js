import React, {Component} from 'react'
import {View, StatusBar, I18nManager} from 'react-native'
import {connect} from 'react-redux'
import NavigationRouter from '../Navigation/NavigationRouter'
import styles from './Styles/RootContainerStyles'
import I18n from 'react-native-i18n'

class RootContainer extends Component {
  constructor (props) {
    super(props);
    console.log('is app rtl');
    console.log(this.props.isRTL);
    console.log('lang:' + I18n.locale);
    console.log(this.props.language)
    I18nManager.forceRTL(this.props.isRTL);
    I18n.defaultLocale = this.props.isRTL;
    I18n.locale = this.props.language;
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
  isRTL: state.toJS().isRTL,
  language: state.toJS().language
});


const mapDispatchToProps = {};
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);

export default AppContainer;
