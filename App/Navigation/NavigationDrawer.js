import React, {PropTypes, Component} from 'react'
import {I18nManager} from 'react-native'
import {Drawer} from 'native-base'
import {DefaultRenderer, Actions as NavigationActions} from 'react-native-router-flux'
import DrawerContent from '../Containers/DrawerContent'
import {connect} from 'react-redux'
const IS_RTL = I18nManager.isRTL;

/* *******************
 * Documentation: https://github.com/root-two/react-native-drawer
 ********************/

class NavigationDrawer extends Component {
  render () {
    const state = this.props.navigationState
    const children = state.children
    return (
      <Drawer
        ref='navigation'
        open={state.open}
        panOpenMask={.25}
        openDrawerOffset={0.2}
        closedDrawerOffset={-3}
        side="left"
        onOpen={() => NavigationActions.refresh({key: state.key, open: true})}
        onClose={() => NavigationActions.refresh({key: state.key, open: false})}
        content={<DrawerContent />}
        tapToClose
      >
        <DefaultRenderer navigationState={children[state.index]} onNavigate={this.props.onNavigate}/>
      </Drawer>
    )
  }
}

NavigationDrawer.propTypes = {
  navigationState: PropTypes.object
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer)
