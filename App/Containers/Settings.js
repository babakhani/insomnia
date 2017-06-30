import React from 'react'
import {
  Switch,
  FlatList,
  ListView
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
  Content,
  Row,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base'

import {
  login, logout, updateExchangeData
} from '../Actions/index'

class Settings extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.updateExchangeData()
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
  exchangeData: function () {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ds.cloneWithRows(state.toJS().exchangeData.bill)
  }
});

const mapDispatchToProps = {
  login, logout, updateExchangeData
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

export default AppContainer;

