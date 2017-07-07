import React from 'react'
import {RefreshControl} from 'react-native'
import {connect} from 'react-redux'
import {Switch, ListView, View} from 'react-native'
import {
  ListItem,
  Text,
  Container,
  Grid,
  Col,
  Body,
  Card,
  CardItem,
  Icon
} from 'native-base'
import styles from './BillRateStyles'
const moment = require('moment');
import {
  updateExchangeData
} from '../../Actions/index'
import Flag from '../../Components/react-native-flags'
function ChangeIcon (props) {
  if (props.change === 'up') {
    return <Icon style={{color: 'green'}} name='arrow-up'/>
  } else {
    return <Icon style={{color: 'red'}} name='arrow-down'/>
  }
}

class CoinRates extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentWillMount () {
    this.props.updateExchangeData()
  }

  render () {
    return (
      <Container >
        <ListItem itemDivider>
          <Text style={styles.updateText}>Last update {this.props.lastUpdateTime}</Text>
        </ListItem>
        <Card refreshControl={
          <RefreshControl
            refreshing={this.props.refreshing}
            onRefresh={this.props.updateExchangeData}
          />
        } style={{flex: 0}} dataArray={this.props.exchangeData}
              renderRow={(item) =>
            <CardItem style={{borderWidth: 0.5, borderColor: '#d6d7da', margin: 5}} bordered='true'>
              <Body>
                <Grid>
                  <Col size={20} style={{padding: 0}}>
                    <Text>{item.title}</Text>
                    <Flag
                      code={item.flag}
                      size={48}
                />
                  </Col>
                  <Col size={30} style={{padding: 10}}>
                    <Text style={styles.listHelperText} >symbole</Text>
                    <Text>{item.symbole}</Text>
                  </Col>
                  <Col size={20} style={{padding: 10}}>
                    <Text style={styles.listHelperText} >buy</Text>
                    <Text>{item.buy}</Text>
                  </Col>
                  <Col size={20} style={{padding: 10}}>
                    <Text style={styles.listHelperText} >sale</Text>
                    <Text>{item.sale}</Text>
                  </Col>
                  <Col size={10} style={{paddingTop: 15}}>
                    <ChangeIcon change={item.change} />
                  </Col>
                </Grid>
              </Body>
            </CardItem>
        }/>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  isAuth: state.toJS().isAuth,
  dataLoaded: state.toJS().dataLoaded,
  exchangeData: state.toJS().exchangeData.bill,
  refreshing: state.toJS().refreshing,
  lastUpdateTime: state.toJS().lastUpdateTime
});

const mapDispatchToProps = {
  updateExchangeData
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinRates)
