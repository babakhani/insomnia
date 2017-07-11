import React from 'react'
import {ScrollView, Linking, Text, Image, View, I18nManager, Animated} from 'react-native'
import {connect} from 'react-redux'
import {Button, Text as NBText, Picker, Content} from 'native-base'
import {Images} from '../Themes'
import {Actions as NavigationActions} from 'react-native-router-flux'
import {Actions} from 'react-native-router-flux'
import styles from './Styles/LaunchScreenStyles'
import I18n from 'react-native-i18n'
const IS_RTL = I18nManager.isRTL;
// Imported Actions
import {
  changeLanguage,
  loginByGoogle
} from '../Actions/index'
import Animation from 'lottie-react-native';

import {google, facebook, twitter, tumblr} from 'react-native-simple-auth';


class LaunchScreen extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount () {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
    }).start();
//    Linking.getInitialURL().then((url) => {
//      if (url) {
//        console.log('Initial url is: ' + url);
//      }
//    }).catch(err => console.error('An error occurred', err));
  }

  reset () {
    Animated.timing(this.state.progress, {
      toValue: 0,
      duration: 3000,
    }).start();
  }

  play () {
    const that = this;
//    console.log("reset animation")
//    Animated.timing(this.state.progress, {
//      toValue: 0,
//      duration: 3000,
//    }).start(Actions.exchangeView);
    console.log("start oAuth 2")
    google({
      appId: '502330530935-27aje9vec8cil80n4lotoqiq3mmrs38f.apps.googleusercontent.com',
      callback: 'org.reactjs.native.example.MellatExchange:/oauth2redirect',
    }).then((info) => {
      that.props.loginByGoogle(info.user, info.credentials);
      Actions.exchangeView();
    }).catch((error) => {
      console.log(error.code)
      console.log(error.description)
    });
  }

  render () {
    return (
      <View style={styles.mainContainer}>

        {/*<Animation*/}
        {/*style={styles.backgroundImage}*/}
        {/*source={require('../Animation/mild_wave.json')}*/}
        {/*progress={this.state.bgAnimate}*/}
        {/*resizeMode='stretch'*/}
        {/*/>*/}

        <ScrollView style={styles.container}>
          <View style={styles.animateContainerWrapper}>
            <View style={styles.animateContainer}>
              <Animation
                style={{
                width: 300,
                height: 300,
              }}
                source={require('../Animation/vr_animation.json')}
                progress={this.state.progress}
              />
              {/*<Image source={Images.launch} style={styles.logo}/>*/}
            </View>
            <View style={styles.section}>
              <Text>Wellcome: {this.props.userInfo.name}</Text>
              <Text style={styles.sectionText}>
                {I18n.t('greeting')}
              </Text>
            </View>
          </View>
          <Button large block style={{alignSelf: 'center'}} onPress={() => this.play()}>
            <NBText>{I18n.t('signin')}</NBText>
          </Button>


          <Button large block style={{alignSelf: 'center'}} onPress={Actions.exchangeView}>
            <NBText>Go to app</NBText>
          </Button>

        </ScrollView>
      </View>
    )
  }
}


const mapDispatchToProps = {
  changeLanguage, loginByGoogle
};

const mapStateToProps = (state, ownProps) => ({
  language: state.toJS().language,
  userInfo: state.toJS().userInfo
});

LaunchScreen.contextTypes = {
  drawer: React.PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)

