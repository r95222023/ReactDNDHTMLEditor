import MuiThemeProvider from '../../material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DraggableBlock from '../draggables/DraggableBlock';

import SourceList from '../components/SourceList';
import ConfigDialog from '../ui/_ConfigDialog'

let testContent = {
  tag: 'div',
  class: 'layout-row',
  style: {width: '500px', height: '200px', backgroundColor: 'yellow'},
  children: [{
    tag: 'div',
    class: 'layout-column',
    style: {width: '200px', height: '100px', backgroundColor: 'blue', margin: '10px'},
    children: [{
      tag: 'div',
      style: {width: '100px', height: '50px', backgroundColor: 'green', margin: '10px'}
    }, {
      tag: 'div',
      style: {width: '100px', height: '50px', backgroundColor: 'green', margin: '10px'}
    }]
  }, {
    tag: 'div',
    style: {width: '200px', height: '100px', backgroundColor: 'blue', margin: '10px'}
  }],
};


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
          <SourceList />
        </div>
        <div className={'flex'}>
          <DraggableBlock content={this.state.content} path={[]}/>
        </div>
        <ConfigDialog/>
      </div>
    </MuiThemeProvider>
    );
  }
}
export default DragDropContext(HTML5Backend)(Container)
