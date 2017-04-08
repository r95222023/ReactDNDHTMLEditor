import React, {Component, PropTypes} from 'react';
import UiBlockToolbar from './UiBlockToolbar';

const uiContainer = {
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  height: '100%',
  width: '100%',
  lineHeight: '1rem'
};

const borderStyle = {};
borderStyle.top = {
  top: '0',
  right: '0',
  left: '0',
  height: '3px',
  borderTopLeftRadius: '5px',
  borderTopRightRadius: '5px'
};
borderStyle.right = {
  top: '0',
  right: '0',
  bottom: '0',
  width: '3px',
  borderTopRightRadius: '5px',
  borderBottomRightRadius: '5px'
};
borderStyle.bottom = {
  right: '0',
  bottom: '0',
  left: '0',
  height: '3px',
  borderBottomRightRadius: '5px',
  borderBottomLeftRadius: '5px'
};
borderStyle.left = {
  top: '0',
  bottom: '0',
  left: '0',
  width: '3px',
  borderTopLeftRadius: '5px',
  borderBottomLeftRadius: '5px'
};
borderStyle.common = {
  backgroundColor: '#41BB99',
  position: 'absolute',
  zIndex: '11'
};


function getBorderStyle(direction) {
  return Object.assign({display: 'block'}, borderStyle.common, borderStyle[direction])
}

export default class UiBlock extends Component {
  static propTypes = {
    path: PropTypes.array.isRequired,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {hover: false, isMenuOpen:false};
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMenuOpen = this.onMenuOpen.bind(this);
    this.onMenuClose = this.onMenuClose.bind(this);
  }

  onMouseOver() {
    this.setState({hover: true});
    console.log('over', this.props.path)
  }

  onMouseOut() {
    if (this.state.isMenuOpen) return;
    this.setState({hover: false});
    console.log('out', this.props.path)
  }

  onMenuOpen() {
    console.log('menu open')
    this.state.isMenuOpen=true;
    // this.setState({isMenuOpen: true});
  }

  onMenuClose() {
    this.state.isMenuOpen=false;
    setTimeout(()=>{
      this.setState({isMenuOpen: false, hover:false});
    },500);
  }

  render() {
    const {hover, isMenuOpen} = this.state;
    const toolbarStyle = {
      width: '50px',
      height: '20px',
      position: 'absolute',
      top: '0',
      right: '0',
      backgroundColor: 'white',
      zIndex: '1000'
    };

    return (
      <div style={uiContainer} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <div style={{height: '100%', width: '100%',display: hover&&!isMenuOpen? 'block':'none'}}>
          <span style={getBorderStyle('top')}></span>
          <span style={getBorderStyle('right')}></span>
          <span style={getBorderStyle('bottom')}></span>
          <span style={getBorderStyle('left')}></span>
          <UiBlockToolbar onMenuOpen={this.onMenuOpen} onMenuClose={this.onMenuClose}/>
        </div>
      </div>);
  }
}
