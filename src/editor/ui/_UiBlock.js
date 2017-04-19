import { connect } from 'react-redux'
import UiBlock from './UiBlock'
import { toggleConfigDialog } from '../../actions'

const mapStateToProps = (state) => {
  return {
    forceClose: state.configDialog.open
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleConfigDialog: () => {
      dispatch(toggleConfigDialog())
    }
  }
}

const _ConfigMenuItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(UiBlock)

export default _ConfigMenuItem
