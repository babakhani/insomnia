import React, {Component} from 'react'
import {Image, BackAndroid} from 'react-native'
import {Left, Body, ListItem, Text, View, Content} from 'native-base'
import {Actions as NavigationActions} from 'react-native-router-flux'
import styles from './Styles/DrawerContentStyles'
import {Images} from '../Themes'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={Images.logoDark} style={styles.logo} />
        <Content>
          <ListItem icon onPress={() => { NavigationActions.exchangeView(); this.context.drawer.close() }}>
            <Left>
              <Icon size={30} name='coin' />
            </Left>
            <Body>
              <Text>Exchange Rate</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={() => { NavigationActions.listViewExample(); this.context.drawer.close() }}>
            <Left>
              <Icon size={30} name='link' />
            </Left>
            <Body>
              <Text>Usefull links</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={() => { NavigationActions.contactUs(); this.context.drawer.close() }}>
            <Left>
              <Icon size={30} name='phone-classic' />
            </Left>
            <Body>
              <Text>Contact us</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={() => { NavigationActions.settings(); this.context.drawer.close() }}>
            <Left>
              <Icon size={30} name='settings' />
            </Left>
            <Body>
              <Text>Setting</Text>
            </Body>
          </ListItem>
        </Content>
      </View>
    )
  }

}
DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
