import React, {Component, PropTypes} from 'react';
import MoreMenu from './_MoreMenu';

const toolbarStyle = {
  width:'50px',
  height:'20px',
  position:'absolute',
  top:'0',
  right:'0',
  backgroundColor:'white',
  zIndex:'1000'
};

export default class Toolbar extends Component {
  // static propTypes = {
  //   hover:PropTypes.bool.isRequired,
  //   // path: PropTypes.array.isRequired,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    const { path, onMenuOpen, onMenuClose } = this.props;
    return (
      <div style={toolbarStyle}>
        <MoreMenu path={path} onMenuOpen={onMenuOpen} onMenuClose={onMenuClose}/>
      </div>
    )
  }
}
