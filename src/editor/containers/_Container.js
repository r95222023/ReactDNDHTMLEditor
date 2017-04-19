import { connect } from 'react-redux'
import Container from '../components/Container'
import { toggleConfigDialog } from '../../actions'

const mapStateToProps = (state) => {
  return {content:state.content}
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleConfigDialog: () => {
      dispatch(toggleConfigDialog())
    }
  }
}

const _Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default _Container
