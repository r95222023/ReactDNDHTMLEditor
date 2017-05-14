import React from 'react';
import Popover, {PopoverAnimationVertical} from '../../material-ui/Popover';
import Menu from '../../material-ui/Menu';
import MenuItem from '../../material-ui/MenuItem';
import IconButton from '../../material-ui/IconButton';
import MoreVertIcon from '../../material-ui/svg-icons/navigation/more-vert';
function getMenuId(path){
  return 'uiTool'+JSON.stringify(path)
}

export default class MoreMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  getMenu(){
    const {menus, path} =this.props;
    return menus[getMenuId(path)]||{open:false}
  }

  handleTouchTap = (event) => {
    const {openMenu, path} = this.props;
    // This prevents ghost click.
    openMenu(getMenuId(path), event.currentTarget);
    event.preventDefault();
  };

  handleRequestClose = () => {
    const {closeMenu, path} = this.props;
    closeMenu(getMenuId(path),event.currentTarget);
    console.log('close')
  };

  openConfigDialog = () => {
    const {path, openConfigDialog} =this.props;
    this.handleRequestClose();
    openConfigDialog(path);
  };
  removeItem = () => {
    const {path} = this.props;
    this.handleRequestClose();
    this.props.removeItem(path);
  };

  insertItem = () =>{
    const {path} = this.props;
    this.handleRequestClose();
    this.props.insertItem(path, {itemType:'row'});
  }

  render() {
    const menuState = this.getMenu();
    return (
      <div>
        <IconButton onTouchTap={this.handleTouchTap} iconStyle={{
          position: 'absolute',
          width: '12px',
          height: '12px',
          marginTop: '-25px'
        }}><MoreVertIcon /></IconButton>
        <Popover
          open={menuState.open}
          anchorEl={menuState.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu style={{display:menuState.open? 'block':'none'}}>
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
