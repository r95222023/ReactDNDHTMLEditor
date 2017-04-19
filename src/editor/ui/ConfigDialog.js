import React from 'react';
import MenuItem from '../../material-ui/MenuItem';
import Dialog from '../../material-ui/Dialog';
import FlatButton from '../../material-ui/FlatButton';

export default class UiMenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {toggleConfigDialog}=this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={toggleConfigDialog}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={toggleConfigDialog}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={toggleConfigDialog}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}
