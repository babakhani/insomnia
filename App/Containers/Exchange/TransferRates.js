import React from 'react'
import {RefreshControl} from 'react-native'
import {connect} from 'react-redux'
import {Switch} from 'react-native'
import {
  ListItem,
  Text,
  Container,
  Thumbnail,
  Grid,
  Col,
  Body,
  Card,
  CardItem,
  Button,
  Icon
} from 'native-base'
import styles from './BillRateStyles'
const moment = require('moment')

function ChangeIcon (props) {
  if (props.change === 'up') {
    return <Icon style={{color: 'green'}} name='arrow-up'/>
  } else {
    return <Icon style={{color: 'red'}} name='arrow-down'/>
  }
}


import {
  login, logout, incrementAsync
} from '../../Actions/index'

class CoinRates extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      lastUpdateTime: '',
      exchangeData: {
        bill: [],
        coin: []
      }
    }
    console.log("coin")
    console.log(this.props.exchangeData.coin)
  }

  componentWillMount () {
    this.props.incrementAsync()
  }

  render () {
    return (
      <Container >
        <ListItem itemDivider>
          <Switch value={this.props.dataLoaded}/>
          <Text style={styles.updateText}>Last update: {this.props.dataType}</Text>
          <Button onPress={() => this.props.incrementAsync()}>
            <Text>LOAD DATA</Text>
          </Button>
        </ListItem>
        <Text>
          {/*{this.props.dataType}*/}
        </Text>
      </Container>
    )
  }
}
CoinRates.contextTypes = {drawer: React.PropTypes.object}

const mapStateToProps = (state, ownProps) => ({
  isAuth: state.toJS().isAuth,
  dataLoaded: state.toJS().dataLoaded
});

const mapDispatchToProps = {
  login, logout, incrementAsync
};


export default connect(mapStateToProps, mapDispatchToProps)(CoinRates)
