import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {DropTarget, DragSource} from 'react-dnd';
import ItemTypes from './ItemTypes';
import {getComponent} from './basics'

const onHoverStyle = {
  border: '1px dashed gray !important',
};

function getRelativePosition(component, mousePosition) {
  if (!mousePosition) return;
  const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
  const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
  const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

  const hoverClientY = mousePosition.y - hoverBoundingRect.top;
  const hoverClientX = mousePosition.x - hoverBoundingRect.left;

  return [hoverClientX - hoverMiddleX, hoverClientY - hoverMiddleY];
}

function getContent(src) {
  return src; //TODO
}

function dropOrHover(type, props, monitor, component) {
  // const hasDroppedOnChild = monitor.didDrop();
  // if (hasDroppedOnChild && !props.greedy) {
  //   return;
  // }

  let relativePos = getRelativePosition(component, monitor.getClientOffset());
  if (!relativePos) return;
  if (type === 'drop') {
    //insert
    let content = getContent(monitor.getItem());
    let {layout, index, dnd, path} = props;

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
    // dnd.interchange(path, dragIndex, hoverIndex);
  }
}

const boxTarget = {
  drop(props, monitor, component) {
    // dropOrHover('drop', props, monitor, component);
    console.log('drop')
  },
  // hover(props, monitor, component) {
  //   if(!props.dnd) return;
  //   // console.log(props)
  //   // dropOrHover('hover', props, monitor, component);
  //   console.log('hover')
  //
  // },
};

const boxSource = {
  beginDrag(props, monitor, component) {
    console.log('draging')
    return props;
  },
  endDrag(props, monitor, component) {
    return {};
  },
};


class Block extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    dnd: PropTypes.object.isRequired,
    isOverCurrent: PropTypes.bool.isRequired,
    content: PropTypes.object.isRequired,
    path: PropTypes.array.isRequired,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {hover: false};
  }


  render() {
    const {isOverCurrent, connectDropTarget, connectDragSource, content, dnd, path} = this.props;

    if (isOverCurrent) {
      //TODO:set  global selected itemId
    }
    console.log(path)
    let children = null;
    if (content.children) {
      children = [];
      content.children.forEach((child, index) => {
        let newPath = path.slice();
        newPath.push(index);
        children.push(React.createElement(
          DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
          }))(DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
            connectDropTarget: connect.dropTarget(),
            isOverCurrent: monitor.isOver({shallow: true}),
          }))(Block)),
          {content: child, dnd: dnd, path: newPath, key: index},
        ))
      })
    }
    return connectDragSource(connectDropTarget(React.createElement(
      getComponent(content.tag),
      Object.assign({
        className: content.class,
        style: Object.assign({}, content.style),
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseEnter
      }, content.props),
      children,
    )));
  }
}

export default DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOverCurrent: monitor.isOver({shallow: true}),
}))(Block))
