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
import I18n from 'react-native-i18n'
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
          <Title> {I18n.t('exchange')}</Title>
          </Body>
          <Right />
        </Header>
        <Tabs initialPage={0}>
          <Tab heading={I18n.t('bill_rates')}>
            <BillRates />
          </Tab>
          <Tab heading={I18n.t('coin_rates')}>
            <CoinRates />
          </Tab>
          <Tab heading={I18n.t('transfer_rates')}>
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
