import { connect } from 'react-redux'
import MoreMenu from './MoreMenu'
import { toggleConfigDialog } from '../../actions'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleConfigDialog: () => {
      dispatch(toggleConfigDialog())
    }
  }
}

const _MoreMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoreMenu)

export default _MoreMenu
