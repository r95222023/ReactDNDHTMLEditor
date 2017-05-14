import {connect} from 'react-redux'
import MoreMenu from './Menu'
import {toggleConfigDialog, openConfigDialog} from '../../actions'

const mapStateToProps = (state) => {
  return {menus: state.menus}
}

const mapDispatchToProps = (dispatch) => {
  return {
    openMenu: (menuId, anchorEl) => {
      dispatch({type: 'OPEN_MENU', menuId, anchorEl})
    },
    closeMenu: (menuId, anchorEl) => {
      dispatch({type: 'CLOSE_MENU', menuId, anchorEl})
    },
    openConfigDialog: (path) => {
      dispatch(openConfigDialog(path))
    },
    removeItem: (path) => {
      dispatch({type: 'REMOVE_ITEM', path})
    },
    insertItem: (path, params) => {
      dispatch(Object.assign({type: 'INSERT_ITEM', path}, params))
    }
  }
}

const _MoreMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoreMenu)

export default _MoreMenu
