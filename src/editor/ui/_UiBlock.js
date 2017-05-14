import { connect } from 'react-redux'
import UiBlock from './UiBlock'
import { toggleConfigDialog } from '../../actions'

const mapStateToProps = (state) => {
  return {
    menus:state.menus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleConfigDialog: (path) => {
      dispatch(toggleConfigDialog(path))
    }
  }
}

const _ConfigMenuItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(UiBlock)

export default _ConfigMenuItem
