import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';

function getStyle(backgroundColor) {
  return {
    border: '1px solid rgba(0,0,0,0.2)',
    minHeight: '8rem',
    minWidth: '8rem',
    color: 'white',
    backgroundColor,
    padding: '2rem',
    paddingTop: '1rem',
    margin: '1rem',
    textAlign: 'center',
    float: 'left',
    fontSize: '1rem',
  };
}

const boxTarget = {
  drop(props, monitor, component) {
    const hasDroppedOnChild = monitor.didDrop();
    if (hasDroppedOnChild && !props.greedy) {
      return;
    }

    let src = monitor.getItem();
    if(props.handleDrop){
      props.handleDrop();
    }
    component.setState({
      hasDropped: true,
      hasDroppedOnChild,
    });
  },
};


class Bin extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    isOverCurrent: PropTypes.bool.isRequired,
    greedy: PropTypes.bool,
    children: PropTypes.node,
  }

  constructor(props) {
    super(props);
    this.state = {
      hasDropped: false,
      hasDroppedOnChild: false,
    };
  }

  render() {
    const { greedy, isOver, isOverCurrent, connectDropTarget, children, content } = this.props;
    const { hasDropped, hasDroppedOnChild } = this.state;

    const text = greedy ? 'greedy' : 'not greedy';
    let backgroundColor = 'rgba(0, 0, 0, .5)';

    if (isOverCurrent || (isOver && greedy)) {
      backgroundColor = 'darkgreen';
    }

    let res =[];
    (content||[]).map((bin)=>{
      //TODO: if  custom => import {...} from
      let component = bin.component;
      let children = bin.children? React.createElement(
          Bin,
          {content:bin.children},
        ):null;
      res.push(React.createElement(
        component,
        bin.props||{},
        children,
      ))
    });


    return connectDropTarget(res);
  }
}
export default DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
}))(Bin)
