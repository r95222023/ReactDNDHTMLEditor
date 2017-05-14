import { connect } from 'react-redux'
import ConfigTabs from './ConfigTabs'

const mapStateToProps = (state) => {
  return {content:state.content}
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeConfigDialog: () => {
      dispatch(closeConfigDialog())
    }
  }
}

const _ConfigTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigTabs)

export default _ConfigTabs
