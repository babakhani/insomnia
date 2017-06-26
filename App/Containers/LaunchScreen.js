import React from 'react'
import {ScrollView, Text, Image, View, I18nManager} from 'react-native'
import {Button, Text as NBText} from 'native-base'
import {Images} from '../Themes'
import {Actions} from 'react-native-router-flux'

// Styles
import styles from './Styles/LaunchScreenStyles'

const IS_RTL = I18nManager.isRTL

export default class LaunchScreen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              {'Wellcome to MellatExchange Application' + IS_RTL}
            </Text>
          </View>
          <Button style={{alignSelf: 'center'}} onPress={Actions.exchangeView}>
            <NBText>Enjoy!</NBText>
          </Button>
        </ScrollView>
      </View>
    )
  }
}

LaunchScreen.contextTypes = {
  drawer: React.PropTypes.object
}
