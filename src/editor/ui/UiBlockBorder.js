import React, {Component, PropTypes} from 'react';

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
  display: 'block',
  backgroundColor: '#41BB99',
  position: 'absolute',
  zIndex: '11'
};


function getBorderStyle(direction, color) {
  return Object.assign({backgroundColor: color||'#41BB99'}, borderStyle.common, borderStyle[direction])
}

export default class UiBlockBorder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {direction} = this.props;

    return (<span style={getBorderStyle(direction)}></span>);
  }
}
