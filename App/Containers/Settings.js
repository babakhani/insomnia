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
  Picker,
  Container,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import I18n from 'react-native-i18n'
import Header from '../Components/Header'
// Imported Actions
import {
  updateExchangeData, switchLayout, changeLanguage
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
        <Header title='settings'></Header>
        <ListItem icon>
          <Left>
            <Icon name='settings'/>
          </Left>
          <Body>
          <Text>{I18n.t('rtlـlayout')}</Text>
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
          <Text>{I18n.t('is_data_loaded')}</Text>
          </Body>
          <Right>
            <Switch disabled value={this.props.dataLoaded}/>
          </Right>
        </ListItem>

        <ListItem icon>
          <Left>
            <MIcon size={24} name='earth'/>
          </Left>
          <Body>
          <Text>{I18n.t('language')}</Text>
          </Body>
          <Right>
            <Picker
              selectedValue={this.props.language}
              onValueChange={(itemValue, itemIndex) => this.props.changeLanguage(itemValue)}>
              <Picker.Item label="فارسی" value="fa"/>
              <Picker.Item label="English" value="en"/>
            </Picker>
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
  isRTL: state.toJS().isRTL,
  language: state.toJS().language
});

const mapDispatchToProps = {
  updateExchangeData, switchLayout, changeLanguage
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

export default AppContainer;

