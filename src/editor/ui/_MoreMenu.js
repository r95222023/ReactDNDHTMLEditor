import {connect} from 'react-redux'
import MoreMenu from './MoreMenu'
import {toggleConfigDialog} from '../../actions'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleConfigDialog: () => {
      dispatch(toggleConfigDialog())
    },
    removeItem: (path) => {
      dispatch({type: 'REMOVE_ITEM', path})
    },
    insertItem: (path, item)=>{
      dispatch({type:'INSERT_ITEM', path, item})
    }
  }
}

const _MoreMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoreMenu)

export default _MoreMenu
