import React from 'react';
import Dialog from '../../material-ui/Dialog';
import FlatButton from '../../material-ui/FlatButton';
import ConfigTabs from './_ConfigTabs';

export default class UiMenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {closeConfigDialog, path, open}=this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={closeConfigDialog}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={closeConfigDialog}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={closeConfigDialog}
          bodyStyle={{padding:0}}
        >
          <ConfigTabs path={path}/>
        </Dialog>
      </div>
    );
  }
}
