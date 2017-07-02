import React from 'react'
import {ScrollView, Text, Image, View, I18nManager} from 'react-native'
import {connect} from 'react-redux'
import {Button, Text as NBText, Picker} from 'native-base'
import {Images} from '../Themes'
import {Actions} from 'react-native-router-flux'
import styles from './Styles/LaunchScreenStyles'
import I18n from 'react-native-i18n'
const IS_RTL = I18nManager.isRTL;
// Imported Actions
import {
  changeLanguage
} from '../Actions/index'

class LaunchScreen extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch'/>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo}/>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              {I18n.t('greeting')}
            </Text>
          </View>
          <Button style={{alignSelf: 'center'}} onPress={Actions.exchangeView}>
            <NBText>{I18n.t('signin')}</NBText>
          </Button>
        </ScrollView>
      </View>
    )
  }
}


const mapDispatchToProps = {
  changeLanguage
};

const mapStateToProps = (state, ownProps) => ({
  language: state.toJS().language
});

LaunchScreen.contextTypes = {
  drawer: React.PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)

