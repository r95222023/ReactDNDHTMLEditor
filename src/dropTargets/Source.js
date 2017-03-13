import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

const style = {
  display: 'inline-block',
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  backgroundColor: 'white',
  cursor: 'move',
};

const boxSource = {
  beginDrag(props, monitor, component) {
    return {item:'begin'};
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
    const { connectDragSource } = this.props;

    return connectDragSource(
      <div style={style}>
        Drag me
      </div>
    );
  }
}
export default DragSource(ItemTypes.BOX, boxSource, connect => ({
  connectDragSource: connect.dragSource(),
}))(Source)
