import React from 'react'
import {Linking} from 'react-native'
import {connect} from 'react-redux'
import {
  ListItem,
  Text,
  Container,
  CardItem,
  Card,
  Title,
  Button,
  Left,
  Right,
  Icon as NativeBaseIcon,
  Body
} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MapView from 'react-native-maps'
import I18n from 'react-native-i18n'
import Header from '../Components/Header'

const styles = {
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
}

class ContactUs extends React.Component {

  loadRoute () {
    Linking.openURL('http://maps.apple.com/?ll=35.754514,51.414573')
  }

  render () {
    return (
      <Container >
        <Header title='contact_us'></Header>
        <ListItem itemDivider>
          <Text>{I18n.t('contact_us')}</Text>
        </ListItem>
        <Card>
          <CardItem icon>
            <Left>
              <Icon size={24} name='phone-classic'/>
            </Left>
            <Body>
            <Text>+98 21 66703040</Text>
            </Body>
          </CardItem>
          <CardItem >
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 35.754514,
                longitude: 51.414573,
                latitudeDelta: 0.009,
                longitudeDelta: 0.009
              }}
            >

              <MapView.Marker
                coordinate={{
                  latitude: 35.754514,
                  longitude: 51.414573,
                  latitudeDelta: 0.009,
                  longitudeDelta: 0.009
                }}
                title='Marker text'
                description='Marker Test'
              />
            </MapView>
            <Button small success ref='statusbutton'
                    onPress={this.loadRoute}>
              <Text>{I18n.t('get_route_to_office')}</Text>
            </Button>
          </CardItem>
        </Card>
        <ListItem itemDivider>
          <Text>{I18n.t('master_branch')}</Text>
        </ListItem>
        <Card>
          <CardItem icon>
            <Left>
              <Icon size={24} name='phone-classic'/>
            </Left>
            <Body>
            <Text>+98 21 42533000</Text>
            </Body>
          </CardItem>
          <CardItem >
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 35.700348,
                longitude: 51.419181,
                latitudeDelta: 0.009,
                longitudeDelta: 0.009
              }}>
              <MapView.Marker
                coordinate={{
                  latitude: 35.700348,
                  longitude: 51.419181,
                  latitudeDelta: 0.009,
                  longitudeDelta: 0.009
                }}
                title='Marker text'
                description='Marker Test'
              />

            </MapView>
            <Button small success ref='statusbutton'
                    onPress={this.loadRoute}>
              <Text>{I18n.t('get_route_to_office')}</Text>
            </Button>
          </CardItem>
        </Card>
      </Container>
    )
  }
}
ContactUs.contextTypes = {drawer: React.PropTypes.object}
const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}
export default connect(mapStateToProps)(ContactUs)
