import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
import getComponent from './services'

const style = {
  width: 400,
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
};

const boxSource = {
  beginDrag(props, monitor, component) {
    return props;
  },
  endDrag(props, monitor, component) {
    return {};
  },
};

class Source extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
  }

  render() {
    const { connectDragSource, text} = this.props;
    return connectDragSource(
      <div style={{ ...style }}>
        {text}
      </div>,
    );
  }
}

export default DragSource(ItemTypes.BOX, boxSource, connect => ({
  connectDragSource: connect.dragSource(),
}))(Source)
