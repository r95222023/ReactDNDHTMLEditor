import { connect } from 'react-redux'
import ConfigMenuItem from './ConfigMenuItem'
import { toggleConfigDialog } from '../../actions'

const mapStateToProps = (state) => {
  return {
    open: state.configDialog.open
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
)(ConfigMenuItem)

export default _ConfigMenuItem
