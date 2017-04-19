import React, {Component, PropTypes} from 'react';
import UiBlockBorder from './UiBlockBorder';
import UiBlockToolbar from './UiBlockToolbar';

const uiContainer = {
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  height: '100%',
  width: '100%',
  lineHeight: '1rem'
};


export default class UiBlock extends Component {
  static propTypes = {
    path: PropTypes.array.isRequired,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {hover: false, isMenuOpen:false};
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMenuOpen = this.onMenuOpen.bind(this);
    this.onMenuClose = this.onMenuClose.bind(this);
  }

  onMouseOver() {
    this.setState({hover: true});
    console.log('over', this.props.path)
  }

  onMouseOut() {
    if (this.state.isMenuOpen) return;
    this.setState({hover: false});
    console.log('out', this.props.path)
  }

  onMenuOpen() {
    this.state.isMenuOpen=true;
    // this.setState({isMenuOpen: true});
  }

  onMenuClose() {
    this.state.isMenuOpen=false;
    //unfocus focused block
    setTimeout(()=>{
      this.setState({isMenuOpen: false, hover:false});
    },500);
  }

  render() {
    const {hover, isMenuOpen} = this.state;
    const toolbarStyle = {
      width: '50px',
      height: '20px',
      position: 'absolute',
      top: '0',
      right: '0',
      backgroundColor: 'white',
      zIndex: '1000'
    };

    return (
      <div style={uiContainer} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <div style={{height: '100%', width: '100%',display: hover&&!isMenuOpen? 'block':'none'}}>
          <UiBlockBorder direction={'top'} />
          <UiBlockBorder direction={'right'} />
          <UiBlockBorder direction={'bottom'} />
          <UiBlockBorder direction={'left'} />
          <UiBlockToolbar onMenuOpen={this.onMenuOpen} onMenuClose={this.onMenuClose}/>
        </div>
      </div>);
  }
}
