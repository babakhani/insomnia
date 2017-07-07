import React from 'react'
import {connect} from 'react-redux'
import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base'
import I18n from 'react-native-i18n'


class ExchangeView extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Header>
        <Left>
          <Button title='This is button title' transparent onPress={() => this.context.drawer.open()}>
            <Icon name='ios-menu'/>
          </Button>
        </Left>
        <Body style={{flex: 3}}>
        <Title>{ I18n.t(this.props.title)}</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}
ExchangeView.contextTypes = {drawer: React.PropTypes.object};

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(ExchangeView)
