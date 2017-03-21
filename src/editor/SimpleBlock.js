import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import { getComponent } from '../editor/services'


export default class Block extends Component {
  static propTypes = {
    content: PropTypes.object.isRequired,
    path: PropTypes.array.isRequired,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {hover: false};
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    console.log('enter');
    this.setState({hover: true})
  }

  onMouseLeave() {
    console.log('leave');
    this.setState({hover: false});
  }

  render() {
    const { content, children} = this.props;

    return React.createElement(
      getComponent(content.tag),
      Object.assign({className:content.class, style:content.style}, content.props),
      children||null,
    );
  }
}
