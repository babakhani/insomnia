import React from 'react'
import {ScrollView, Text, Image, View, I18nManager, Animated} from 'react-native'
import {connect} from 'react-redux'
import {Button, Text as NBText, Picker, Content} from 'native-base'
import {Images} from '../Themes'
import {Actions} from 'react-native-router-flux'
import styles from './Styles/LaunchScreenStyles'
import I18n from 'react-native-i18n'
const IS_RTL = I18nManager.isRTL;
// Imported Actions
import {
  changeLanguage
} from '../Actions/index'
import Animation from 'lottie-react-native';


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


  }

  reset () {
    console.log("reset animation")
    Animated.timing(this.state.progress, {
      toValue: 0,
      duration: 3000,
    }).start();
  }

  play () {
    console.log("reset animation")
    Animated.timing(this.state.progress, {
      toValue: 0,
      duration: 3000,
    }).start(Actions.exchangeView);
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
                source={require('../Animation/sample.json')}
                progress={this.state.progress}
              />
              {/*<Image source={Images.launch} style={styles.logo}/>*/}
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionText}>
                {I18n.t('greeting')}
              </Text>
            </View>
          </View>
          <Button large block style={{alignSelf: 'center'}} onPress={() => this.play()}>
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

