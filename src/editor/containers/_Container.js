import { connect } from 'react-redux'
import Container from '../components/Container'
import { toggleConfigDialog } from '../../actions'

const mapStateToProps = (state) => {
  return {content:state.content}
}


const testContent = {
  tag: 'div',
  class: 'layout-row',
  style: {width: '500px', height: '200px', backgroundColor: 'yellow'},
  children: [{
    tag: 'div',
    class: 'layout-column',
    style: {width: '200px', height: '100px', backgroundColor: 'blue', margin: '10px'},
  }, {
    tag: 'div',
    style: {width: '200px', height: '100px', backgroundColor: 'blue', margin: '10px'}
  }],
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleConfigDialog: () => {
      dispatch(toggleConfigDialog())
    },
    importContent:()=>{
      dispatch({type: 'IMPORT', content: testContent })
    },
  }
}

const _Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default _Container
