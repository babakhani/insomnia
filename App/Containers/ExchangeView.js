import React from 'react'
import {connect} from 'react-redux'
import {
  Tab,
  Tabs,
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base'
import BillRates from './Exchange/BillRates'
import CoinRates from './Exchange/CoinRates'
import TransferRates from './Exchange/TransferRates'

class ExchangeView extends React.Component {
  render () {
    return (
      <Container >
        <Header>
          <Left>
            <Button title='This is button title' transparent onPress={() => this.context.drawer.open()}>
              <Icon name='ios-menu'/>
            </Button>
          </Left>
          <Body style={{flex: 3}}>
          <Title>Exchange</Title>
          </Body>
          <Right />
        </Header>
        <Tabs initialPage={0}>
          <Tab heading='Bill rates'>
            <BillRates />
          </Tab>
          <Tab heading='Coin rates'>
            <CoinRates />
          </Tab>
          <Tab heading='Transfer rates'>
            <TransferRates />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}
ExchangeView.contextTypes = {drawer: React.PropTypes.object};

const mapStateToProps = (state, ownProps) => ({
  geod: state.geod,
});

export default connect(mapStateToProps)(ExchangeView)
