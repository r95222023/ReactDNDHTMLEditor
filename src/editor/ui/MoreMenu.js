import React from 'react';
import Popover, {PopoverAnimationVertical} from '../../material-ui/Popover';
import Menu from '../../material-ui/Menu';
import MenuItem from '../../material-ui/MenuItem';
import IconButton from '../../material-ui/IconButton';
import MoreVertIcon from '../../material-ui/svg-icons/navigation/more-vert';
import ConfigMenuItem from './_ConfigMenuItem';

export default class MoreMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    const { onMenuOpen } = this.props;
    // This prevents ghost click.
    event.preventDefault();
    onMenuOpen();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    const { onMenuClose } = this.props;
    onMenuClose();
    console.log('close')
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <IconButton onTouchTap={this.handleTouchTap} iconStyle={{position:'absolute',width:'12px', height:'12px', marginTop:'-25px'}}><MoreVertIcon /></IconButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <ConfigMenuItem closeMenu={this.handleRequestClose} />
          </Menu>
        </Popover>
      </div>
    );
  }
}
