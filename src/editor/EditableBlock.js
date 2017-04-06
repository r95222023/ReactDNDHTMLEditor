import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {getComponent} from '../editor/basics'

export default class Block extends Component {
  static propTypes = {
    content: PropTypes.object.isRequired,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    // this.state = {hover: false};
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.dnd = props.dnd;
  }

  onMouseEnter() {
    const {dnd, path} = this.props;
    console.log('enter', path);
    dnd.onMouseOver(path);
  }

  onMouseLeave() {
    const {dnd, path} = this.props;
    let clonePath = path.slice();
    clonePath.pop();
    if(clonePath.length===0) clonePath='root';
    console.log('leave', clonePath);
    dnd.onMouseOver(clonePath);
  }


  render() {
    const {content, children} = this.props;
    console.log('render')
    return React.createElement(
      getComponent(content.tag),
      Object.assign({
          // onMouseEnter: this.onMouseEnter,
          // onMouseLeave: this.onMouseLeave,
          className: content.class,
          style: Object.assign({position:'relative'},content.style) //TODO: study style in Block
        },
        content.props),
      children || null,
    );
  }
}
