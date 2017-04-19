import { connect } from 'react-redux'
import ConfigDialog from './ConfigDialog'
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

const _ConfigDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigDialog)

export default _ConfigDialog
