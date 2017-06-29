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
  Card,
  CardItem,
  Grid,
  Col,
  Row,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base'

import {
  login, logout, incrementAsync
} from '../Actions/index'

class Settings extends React.Component {
  componentWillMount () {
    this.props.incrementAsync()
  }

  render () {
    return (
      <Container >
        <Header>
          <Left>
            <Button transparent onPress={() => this.context.drawer.open()}>
              <Icon name='ios-menu'/>
            </Button>
          </Left>
          <Body style={{flex: 3}}>
          <Title>Settings</Title>
          </Body>
          <Right />
        </Header>
        <ListItem icon>
          <Left>
            <Icon name='settings'/>
          </Left>
          <Body>
          <Text>Login</Text>
          </Body>
          <Right>
            <Switch onValueChange={() => this.props.login()} value={this.props.isAuth}/>
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Icon name='settings'/>
          </Left>
          <Body>
          <Text>Logout</Text>
          </Body>
          <Right>
            <Switch onValueChange={() => this.props.logout()} value={this.props.isAuth}/>
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Icon name='settings'/>
          </Left>
          <Body>
          <Text>Is Data Loaded</Text>
          </Body>
          <Right>
            <Switch value={this.props.dataLoaded}/>
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Icon name='settings'/>
          </Left>
          <Body>
          <Button onPress={() => this.props.incrementAsync()}>
            <Text>LOAD DATA</Text>
          </Button>
          </Body>
          <Right>
            <Switch value={this.props.dataLoaded}/>
          </Right>
        </ListItem>
        <ListItem icon>
          <Body>
          <Text>_{this.props.dataType}_</Text>
          <Text>_{JSON.toString(this.props.exchangeData)}_</Text>
          </Body>
        </ListItem>
      </Container>
    )
  }
}
Settings.contextTypes = {drawer: React.PropTypes.object}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
  isAuth: state.toJS().isAuth,
  dataLoaded: state.toJS().dataLoaded,
  dataType: state.toJS().dataType,
  exchangeData: state.toJS().exchangeData
});

const mapDispatchToProps = {
  login, logout, incrementAsync
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

export default AppContainer;

