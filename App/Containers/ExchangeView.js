import React from 'react'
import {connect} from 'react-redux'
import {
  Tab,
  Tabs,
  Container,

} from 'native-base'
import BillRates from './Exchange/BillRates'
import CoinRates from './Exchange/CoinRates'
import TransferRates from './Exchange/TransferRates'
import I18n from 'react-native-i18n'
import Header from '../Components/Header'

class ExchangeView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render () {
    return (
      <Container >
        <Header title='exchange_rate'></Header>
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

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(ExchangeView)
