import { connect } from 'react-redux'
import ConfigDialog from './ConfigDialog'
import { closeConfigDialog } from '../../actions'

const mapStateToProps = (state) => {
  return state.configDialog
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeConfigDialog: () => {
      dispatch(closeConfigDialog())
    }
  }
}

const _ConfigDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigDialog)

export default _ConfigDialog
