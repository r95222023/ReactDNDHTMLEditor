import MuiThemeProvider from '../../material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DraggableBlock from '../draggables/DraggableBlock';

import SourceList from '../components/SourceList';
import ConfigDialog from '../ui/_ConfigDialog'
import FlatButton from '../../material-ui/FlatButton';



class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
    };
  }

  render() {
    return (
    <MuiThemeProvider>
      <div className={'layout-row'}>
        <div className={'flex-20'}>
          <FlatButton onTouchTap={this.props.importContent} label="Import" />
          <SourceList />
        </div>
        <div className={'flex'}>
          <DraggableBlock content={this.props.content} path={[]}/>
        </div>
        <ConfigDialog/>
      </div>
    </MuiThemeProvider>
    );
  }
}
export default DragDropContext(HTML5Backend)(Container)
