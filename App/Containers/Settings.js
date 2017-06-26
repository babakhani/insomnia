import React from 'react'
import {
    Switch
} from 'react-native'
import {connect} from 'react-redux'
import {
    ListItem,
    Text,
    Container,
    Header,
    Title,
    Button,
    Left,
    Right,
    Body,
    Icon
} from 'native-base'

class Settings extends React.Component {
  render () {
    return (
      <Container >
        <Header>
          <Left>
            <Button transparent onPress={() => this.context.drawer.open()}>
              <Icon name='ios-menu' />
            </Button>
          </Left>
          <Body style={{flex: 3}}>
            <Title>Settings</Title>
          </Body>
          <Right />
        </Header>
        <ListItem icon>
          <Left>
            <Icon name='plane' />
          </Left>
          <Body>
            <Text>Airplane Mode</Text>
          </Body>
          <Right>
            <Switch value={false} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Icon name='wifi' />
          </Left>
          <Body>
            <Text>Wi-Fi</Text>
          </Body>
          <Right>
            <Text>GeekyAnts</Text>
            <Icon name='arrow-forward' />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Icon name='bluetooth' />
          </Left>
          <Body>
            <Text>Bluetooth</Text>
          </Body>
          <Right>
            <Text>On</Text>
            <Icon name='arrow-forward' />
          </Right>
        </ListItem>
      </Container>
    )
  }
}
Settings.contextTypes = {drawer: React.PropTypes.object}
const mapStateToProps = (state) => {
  return {
        // ...redux state to props here
  }
}
export default connect(mapStateToProps)(Settings)
