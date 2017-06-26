import React from 'react'
import {RefreshControl} from 'react-native'
import {connect} from 'react-redux'
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
    Icon
} from 'native-base'
import styles from './BillRateStyles'
const moment = require('moment')

function ChangeIcon (props) {
  if (props.change === 'up') {
    return <Icon style={{color: 'green'}} name='arrow-up' />
  } else {
    return <Icon style={{color: 'red'}} name='arrow-down' />
  }
}

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
    this.getExchangeData()
  }

  getExchangeData () {
    this.setState({
      isLoading: true
    })

    fetch('https://private-83128-exchange8.apiary-mock.com/exchange#', {
      method: 'GET'
    }).then((response) => response.json())
            .then((responseJson) => {
              this.setState({
                isLoading: false,
                lastUpdateTime: moment().format(),
                exchangeData: responseJson[0]
              }, function () {
                    // do something with new state
              })
                // return responseJson.movies;
            })
            .catch((error) => {
              console.error(error)
            })
  }

  render () {
    return (
      <Container >
        <ListItem itemDivider>
          <Text style={styles.updateText}>Last update: {this.state.lastUpdateTime}</Text>
        </ListItem>

        <Card refreshControl={
          <RefreshControl
            refreshing={this.state.isLoading}
            onRefresh={this.getExchangeData.bind(this)}
          />
        } style={{flex: 0}} dataArray={this.state.exchangeData.coin}
          renderRow={(item) =>
            <CardItem cardBody style={{borderWidth: 0.5, borderColor: '#d6d7da', margin: 5}} bordered='true'>
              <Body>
                <Grid>
                  <Col size={20} style={{padding: 10}}>
                    <Thumbnail Thumbnail width='80' height='80' source={require('../../Images/seke-100.png')} />
                  </Col>
                  <Col size={20} style={{padding: 20}}>
                    <Text>{item.title}</Text>
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
        } />
      </Container>
    )
  }
}
CoinRates.contextTypes = {drawer: React.PropTypes.object}
const mapStateToProps = (state) => {
  return {
        // ...redux state to props here
  }
}
export default connect(mapStateToProps)(CoinRates)
