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
    // this.state = {hover: false};
    // this.onMouseEnter = this.onMouseEnter.bind(this);
    // this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  // onMouseEnter() {
  //   console.log('enter');
  //   this.setState({hover: true})
  // }
  //
  // onMouseLeave() {
  //   console.log('leave');
  //   this.setState({hover: false});
  // }

  render() {
    const {content, children} = this.props;
    console.log('render')
    return React.createElement(
      getComponent(content.tag),
      Object.assign({
          // onMouseEnter: this.onMouseEnter,
          // onMouseLeave: this.onMouseLeave,
          className: content.class,
          style: content.style
        },
        content.props),
      children || null,
    );
  }
}
