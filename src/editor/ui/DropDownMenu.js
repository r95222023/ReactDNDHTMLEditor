import React from 'react';
import Popover, {PopoverAnimationVertical} from '../../material-ui/Popover';
import Menu from '../../material-ui/Menu';
import MenuItem from '../../material-ui/MenuItem';
import IconButton from '../../material-ui/IconButton';
import MoreVertIcon from '../../material-ui/svg-icons/navigation/more-vert';

export default class MoreMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    const {onMenuOpen} = this.props;
    // This prevents ghost click.
    event.preventDefault();
    onMenuOpen();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    const {onMenuClose} = this.props;
    onMenuClose();
    console.log('close')
    this.setState({
      open: false,
    });
  };

  openConfigDialog = () => {
    this.handleRequestClose();
    this.props.toggleConfigDialog();
  };
  removeItem = () => {
    const {path} = this.props;
    this.handleRequestClose();
    this.props.removeItem(path);
  };

  insertItem = () =>{
    const {path} = this.props;
    this.handleRequestClose();
    this.props.insertItem(path, {tag:'div', style: {width:'10px',height:'10px', backgroundColor:'red'}});
  }

  render() {
    return (
      <div>
        <IconButton onTouchTap={this.handleTouchTap} iconStyle={{
          position: 'absolute',
          width: '12px',
          height: '12px',
          marginTop: '-25px'
        }}><MoreVertIcon /></IconButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Refresh"/>
            <MenuItem onClick={this.insertItem} primaryText="Insert"/>
            <MenuItem onClick={this.openConfigDialog} primaryText={'Config'}/>
            <MenuItem onClick={this.removeItem} primaryText="Remove"/>
          </Menu>
        </Popover>
      </div>
    );
  }
}
