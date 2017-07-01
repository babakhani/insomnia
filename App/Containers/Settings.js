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
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base'

import {
  updateExchangeData, switchLayout
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
          <Text>RTL layout</Text>
          </Body>
          <Right>
            <Switch onValueChange={() => this.props.switchLayout()} value={this.props.isRTL}/>
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
            <Switch disabled value={this.props.dataLoaded}/>
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
  isRTL: state.toJS().isRTL
});

const mapDispatchToProps = {
  updateExchangeData, switchLayout
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

export default AppContainer;

