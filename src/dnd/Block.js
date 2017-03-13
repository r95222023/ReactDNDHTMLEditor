import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {DropTarget} from 'react-dnd';
import ItemTypes from './ItemTypes';

function getPositionRelativeToMiddle(component, mousePosition) {
  const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
  const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
  const hoverMiddleX = (hoverBoundingRect.left - hoverBoundingRect.right) / 2;

  const hoverClientY = mousePosition.y - hoverBoundingRect.top;
  const hoverClientX = mousePosition.x - hoverBoundingRect.left;
  return [hoverClientX - hoverMiddleX, hoverClientY - hoverMiddleY];
}

function getContent(src) {
  return src; //TODO
}

function dropOrHover(type, props, monitor, component) {
  const hasDroppedOnChild = monitor.didDrop();
  if (hasDroppedOnChild && !props.greedy) {
    return;
  }

  let relativePos = getPositionRelativeToMiddle(component, monitor.getClientOffset());

  if (props.fromSrc) {
    //insert
    let content = getContent(monitor.getItem());
    let {layout, index, dnd} = props;
    let {path} = props.content;

    index += relativePos[layout === 'column' ? 1 : 0] > 0 ? 1 : -1;

    dnd.insert(path, index, content, type === 'hover');
  } else {
    //interchange
    if (type === 'drop') return;
    let dragIndex = monitor.getItem().index;
    let hoverIndex = props.index;

    // Dragging upwards or leftward
    if (dragIndex < hoverIndex && relativePos[layout === 'column' ? 1 : 0] < 0) {
      return;
    }
    // Dragging downwards or rightward
    if (dragIndex > hoverIndex && relativePos[layout === 'column' ? 1 : 0] < 0) {
      return;
    }
    //if item passes the middle
    dnd.interchange(path, dragIndex, hoverIndex);
  }
}

const boxTarget = {
  drop(props, monitor, component) {
    dropOrHover('drop', props, monitor, component);
  },
  hover(props, monitor, component) {
    dropOrHover('hover', props, monitor, component);
  },
};


class Block extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    dnd: PropTypes.object.isRequired,
    isOverCurrent: PropTypes.bool.isRequired,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {isOverCurrent, connectDropTarget, content, dnd, path} = this.props;

    if (isOverCurrent) {
      //TODO:set selected id
    }

    let children = null;
    if (content.children) {
      children = [];
      content.children.forEach((child, index) => {
        let newPath = path.slice();
        newPath.push(index);
        children.push(React.createElement(
          DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
            connectDropTarget: connect.dropTarget(),
            isOverCurrent: monitor.isOver({shallow: true}),
          }))(Block),
          {content: child, dnd, path: newPath},
        ))
      })
    }
    return connectDropTarget(React.createElement(
      content.component,
      Object.assign({dnd}, content.props),
      children,
    ));
  }
}

export default DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOverCurrent: monitor.isOver({shallow: true}),
}))(Block)
