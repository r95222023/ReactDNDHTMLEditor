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
    this.state = {hover: false};
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState({hover: true});
    console.log('over', this.props.path)
  }

  onMouseOut() {
    this.setState({hover: false});
    console.log('out', this.props.path)
  }

  render() {
    const {path} = this.props;
    const {hover} = this.state;

    return (
      <div style={uiContainer} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <div style={{height: '100%', width: '100%',display: hover? 'block':'none'}}>
          <UiBlockBorder direction={'top'} />
          <UiBlockBorder direction={'right'} />
          <UiBlockBorder direction={'bottom'} />
          <UiBlockBorder direction={'left'} />
          <UiBlockToolbar path={path}/>
        </div>
      </div>);
  }
}
