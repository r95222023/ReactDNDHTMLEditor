import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {getComponent} from '../../common/snippets'

export default class Block extends Component {
  static propTypes = {
    content: PropTypes.object.isRequired,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
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
