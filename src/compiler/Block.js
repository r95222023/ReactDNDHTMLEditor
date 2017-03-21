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
  }

  render() {
    const { content, path} = this.props;

    let children = null;
    if (content.children) {
      children = [];
      content.children.forEach((child, index) => {
        let newPath = path.slice();
        newPath.push(index);
        children.push(React.createElement(
          Block,
          {content: child, path: newPath, key: index},
        ))
      })
      console.log(children)
    }
    return React.createElement(
      getComponent(content.tag),
      Object.assign({className:content.class, style:content.style}, content.props),
      children,
    );
  }
}
