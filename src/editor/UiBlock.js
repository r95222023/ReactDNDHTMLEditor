import React, {Component, PropTypes} from 'react';

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

function getBorderStyle(direction, hover) {
  return Object.assign({display: hover? 'block' : 'none'}, borderStyle.common, borderStyle[direction])
}

export class Toolbar extends Component {
  static propTypes = {
    path: PropTypes.array.isRequired,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
  }

  render() {
  }
}

export default class UiBlock extends Component {
  static propTypes = {
    path: PropTypes.array.isRequired,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {hover: false};
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState({hover: true});
    console.log('over', this.props.path)
  }

  onMouseOut() {
    this.setState({hover: false});
    console.log('out', this.props.path)
  }

  render() {
    const { hover } = this.state;
    const toolbarStyle = {
      width:'50px',
      height:'20px',
      position:'absolute',
      top:'0',
      left:'0',
      backgroundColor:'red',
      zIndex:'1000'
    };
    return (
      <div style={uiContainer} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <span style={getBorderStyle('top', hover)}></span>
        <span style={getBorderStyle('right', hover)}></span>
        <span style={getBorderStyle('bottom', hover)}></span>
        <span style={getBorderStyle('left', hover)}></span>
        <div style={hover? toolbarStyle:{display:'none'}}></div>
      </div>);
  }
}
